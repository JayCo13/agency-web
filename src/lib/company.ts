// Legal entity behind the TicoSystem brand. Single source of truth for the
// footer, the About section, the contact block and the JSON-LD on every page.
//
// Fields left as empty strings are simply not rendered. Fill in `taxId` and
// `address` with the values on the business registration certificate
// (Giấy chứng nhận đăng ký doanh nghiệp) and they appear everywhere at once.

export const COMPANY = {
  brand: "TicoSystem",
  legalNameVi: "Công ty TNHH Giải pháp Công nghệ và Phần mềm TC",
  legalNameEn: "TC Technology and Software Solutions Company Limited",
  shortNameEn: "TC Technology & Software Solutions Co., Ltd.",
  taxId: "", // Mã số thuế, e.g. "0312345678"
  address: { vi: "", en: "" }, // Trụ sở chính
  email: "taicopgm@gmail.com",
  phoneDisplay: "+84 765 773 913",
  phoneE164: "+84765773913",
  whatsapp: "https://wa.me/84765773913",
  zalo: "https://zalo.me/0765773913", // Zalo uses the same phone number
  linkedin:
    "https://www.linkedin.com/in/c%E1%BB%95-tr%E1%BB%8Bnh-hi%E1%BB%81n-t%C3%A0i-7b7762384/",
  calendly: "https://calendly.com/taicopgm/30min",
  site: "https://ticosystem.com",
} as const;

export function legalName(lang: "en" | "vi") {
  return lang === "vi" ? COMPANY.legalNameVi : COMPANY.legalNameEn;
}
