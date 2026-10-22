"use client";

import React, { useActionState, useEffect, useId, useState } from "react";
import styles from "./home.module.css";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { sendContact, type ContactState } from "@/app/actions/contact";

export interface ContactTabsCopy {
  tabMessage: string;
  tabBook: string;
  name: string;
  namePh: string;
  email: string;
  emailPh: string;
  phone: string;
  phonePh: string;
  optional: string;
  topic: string;
  topicPh: string;
  topics: string[];
  message: string;
  messagePh: string;
  send: string;
  sending: string;
  privacy: string;
  sentTitle: string;
  sentBody: string;
  sendAnother: string;
  error: string;
  mailtoNote: string;
  bookingNote: string;
}

const initial: ContactState = { status: "idle" };

export default function ContactTabs({
  lang,
  copy,
  calendlyUrl,
  mailTo,
}: {
  lang: "vi" | "en";
  copy: ContactTabsCopy;
  calendlyUrl: string;
  mailTo: string;
}) {
  const [tab, setTab] = useState<"message" | "book">("message");
  const [bookOpened, setBookOpened] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [state, action, pending] = useActionState(sendContact, initial);
  // The success panel shows for the latest "sent" result until dismissed.
  const [dismissed, setDismissed] = useState<ContactState | null>(null);
  const showSent = state.status === "sent" && dismissed !== state;
  const uid = useId();

  // Email sending not configured yet: hand the message to the visitor's
  // email app, pre-filled, so the enquiry still reaches us.
  useEffect(() => {
    if (state.status !== "unconfigured") return;
    const f = state.fields;
    const subject = `[ticosystem.com] ${f.name}${f.topic ? ` - ${f.topic}` : ""}`;
    const body = `${f.message}\n\n${f.name}\n${f.email}${f.phone ? `\n${f.phone}` : ""}`;
    window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [state, mailTo]);

  const fields = "fields" in state ? state.fields : undefined;
  const errors = state.status === "invalid" ? state.errors : {};

  const select = (next: "message" | "book") => {
    setTab(next);
    if (next === "book") setBookOpened(true);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = tab === "message" ? "book" : "message";
    select(next);
    document.getElementById(`${uid}-tab-${next}`)?.focus();
  };

  return (
    <div className={styles.booking}>
      <div className={styles.ctTabs} role="tablist" aria-label={copy.tabMessage} onKeyDown={onKey}>
        {(["message", "book"] as const).map((k) => (
          <button
            key={k}
            id={`${uid}-tab-${k}`}
            type="button"
            role="tab"
            aria-selected={tab === k}
            aria-controls={`${uid}-panel-${k}`}
            tabIndex={tab === k ? 0 : -1}
            className={`${styles.ctTab} ${tab === k ? styles.ctTabActive : ""}`}
            onClick={() => select(k)}
          >
            {k === "message" ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2.5" /><path d="M16 2v4M8 2v4M3 10h18M8 15h3" /></svg>
            )}
            {k === "message" ? copy.tabMessage : copy.tabBook}
          </button>
        ))}
      </div>

      {/* Tab 1: message form (default) */}
      <div id={`${uid}-panel-message`} role="tabpanel" aria-labelledby={`${uid}-tab-message`} hidden={tab !== "message"} className={styles.ctPanel}>
        {showSent ? (
          <div className={styles.ctSent} role="status">
            <span className={styles.ctSentIcon} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
            </span>
            <h3>{copy.sentTitle}</h3>
            <p>{copy.sentBody}</p>
            <button
              type="button"
              className={styles.ctLink}
              onClick={() => {
                setDismissed(state);
                setFormKey((k) => k + 1);
              }}
            >
              {copy.sendAnother}
            </button>
          </div>
        ) : null}

        <form
          key={formKey}
          action={action}
          className={styles.ctForm}
          hidden={showSent}
          noValidate
        >
          <input type="hidden" name="lang" value={lang} />
          {/* Honeypot for bots */}
          <div className={styles.ctTrap} aria-hidden="true">
            <label>
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className={styles.ctRow}>
            <Field id={`${uid}-name`} label={copy.name} error={errors.name}>
              <input id={`${uid}-name`} name="name" type="text" autoComplete="name" placeholder={copy.namePh} defaultValue={fields?.name} aria-invalid={!!errors.name} required />
            </Field>
            <Field id={`${uid}-email`} label={copy.email} error={errors.email}>
              <input id={`${uid}-email`} name="email" type="email" autoComplete="email" inputMode="email" placeholder={copy.emailPh} defaultValue={fields?.email} aria-invalid={!!errors.email} required />
            </Field>
          </div>

          <div className={styles.ctRow}>
            <Field id={`${uid}-phone`} label={copy.phone} hint={copy.optional}>
              <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" placeholder={copy.phonePh} defaultValue={fields?.phone} />
            </Field>
            <Field id={`${uid}-topic`} label={copy.topic} hint={copy.optional}>
              <select id={`${uid}-topic`} name="topic" defaultValue={fields?.topic ?? ""}>
                <option value="">{copy.topicPh}</option>
                {copy.topics.map((tp) => (
                  <option key={tp} value={tp}>
                    {tp}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field id={`${uid}-message`} label={copy.message} error={errors.message}>
            <textarea id={`${uid}-message`} name="message" rows={5} placeholder={copy.messagePh} defaultValue={fields?.message} aria-invalid={!!errors.message} required />
          </Field>

          {state.status === "error" && (
            <p className={styles.ctAlert} role="alert">
              {copy.error}
            </p>
          )}
          {state.status === "unconfigured" && (
            <p className={styles.ctNote} role="status">
              {copy.mailtoNote}
            </p>
          )}

          <div className={styles.ctSubmitRow}>
            <button type="submit" className={styles.ctSubmit} disabled={pending}>
              {pending ? copy.sending : copy.send}
              {!pending && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              )}
            </button>
            <p className={styles.ctPrivacy}>{copy.privacy}</p>
          </div>
        </form>
      </div>

      {/* Tab 2: booking. Calendly mounts the first time the tab is opened. */}
      <div id={`${uid}-panel-book`} role="tabpanel" aria-labelledby={`${uid}-tab-book`} hidden={tab !== "book"}>
        {bookOpened && <CalendlyEmbed url={calendlyUrl} />}
        <p className={styles.bookingNote}>{copy.bookingNote}</p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.ctField}>
      <label htmlFor={id}>
        {label}
        {hint && <span>{hint}</span>}
      </label>
      {children}
      {error && <p className={styles.ctError}>{error}</p>}
    </div>
  );
}
