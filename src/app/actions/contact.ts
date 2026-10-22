"use server";

import { COMPANY } from "@/lib/company";

// Contact form → email.
//
// Sending uses Resend's HTTP API (no extra package). Set these in .env.local
// and in the Netlify environment:
//   RESEND_API_KEY   required to send, from https://resend.com/api-keys
//   CONTACT_TO       optional, inbox that receives messages (default: COMPANY.email)
//   CONTACT_FROM     optional, verified sender, e.g. "TicoSystem <hello@ticosystem.com>"
//                    (default: Resend's test sender, which only delivers to the
//                    email address of the Resend account owner)
//
// Without RESEND_API_KEY the action returns "unconfigured" and the form falls
// back to opening the visitor's email app with the message pre-filled, so
// enquiries are never lost while email is being set up.

export type ContactFields = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "invalid"; errors: Partial<Record<keyof ContactFields, string>>; fields: ContactFields }
  | { status: "unconfigured"; fields: ContactFields }
  | { status: "error"; fields: ContactFields };

const MSG = {
  vi: {
    name: "Vui lòng nhập tên của bạn.",
    email: "Email chưa đúng định dạng.",
    message: "Vui lòng mô tả nhu cầu (ít nhất 10 ký tự).",
  },
  en: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: "Please describe what you need (at least 10 characters).",
  },
} as const;

function str(form: FormData, key: string, max: number): string {
  const v = form.get(key);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (str(form, "website", 200)) return { status: "sent" };

  const lang = str(form, "lang", 2) === "en" ? "en" : "vi";
  const fields: ContactFields = {
    name: str(form, "name", 120),
    email: str(form, "email", 200),
    phone: str(form, "phone", 40),
    topic: str(form, "topic", 120),
    message: str(form, "message", 5000),
  };

  const errors: Partial<Record<keyof ContactFields, string>> = {};
  if (!fields.name) errors.name = MSG[lang].name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) errors.email = MSG[lang].email;
  if (fields.message.length < 10) errors.message = MSG[lang].message;
  if (Object.keys(errors).length) return { status: "invalid", errors, fields };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "unconfigured", fields };

  const rows: [string, string][] = [
    ["Tên / Name", fields.name],
    ["Email", fields.email],
    ["Điện thoại / Phone", fields.phone || "-"],
    ["Nhu cầu / Topic", fields.topic || "-"],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${fields.message}`;
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#6b5a50">${escapeHtml(k)}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join("")}</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(fields.message)}</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "TicoSystem <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO || COMPANY.email],
        reply_to: fields.email,
        subject: `[ticosystem.com] ${fields.name}${fields.topic ? ` - ${fields.topic}` : ""}`,
        text,
        html,
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Contact email failed", res.status, await res.text().catch(() => ""));
      return { status: "error", fields };
    }
    return { status: "sent" };
  } catch (err) {
    console.error("Contact email failed", err);
    return { status: "error", fields };
  }
}
