// Legal entity behind the TicoSystem brand. Single source of truth for the
// footer, the About section, the contact block and the JSON-LD on every page.
//
// Fields left as empty strings are simply not rendered. Fill in `taxId` and
// `address` with the values on the business registration certificate
// (Giấy chứng nhận đăng ký doanh nghiệp) and they appear everywhere at once.

export const COMPANY = {
  brand: "TicoSystem",
  legalNameVi: "Công ty TNHH Giải pháp Phần mềm và Công nghệ TC",
  legalNameEn: "TC Technology and Software Solution Company Limited",
  shortNameEn: "TC Technology and Software Solution Co., Ltd.",
  taxId: "3901395944", // Mã số doanh nghiệp / mã số thuế
  address: {
    vi: "Ô5/131A Đường Dương Văn Nốt, Khu phố Thanh Bình, Phường Gò Dầu, Tỉnh Tây Ninh, Việt Nam",
    en: "Ô5/131A Duong Van Not Street, Thanh Binh Quarter, Go Dau Ward, Tay Ninh Province, Vietnam",
  }, // Trụ sở chính theo GCN ĐKDN
  email: "taicopgm@gmail.com",
  phoneDisplay: "+84 765 773 913",
  phoneE164: "+84765773913",
  whatsapp: "https://wa.me/84765773913",
  zalo: "https://zalo.me/0765773913", // Zalo uses the same phone number
  linkedin:
    "https://www.linkedin.com/in/c%E1%BB%95-tr%E1%BB%8Bnh-hi%E1%BB%81n-t%C3%A0i-7b7762384/",
  calendly: "https://calendly.com/taicopgm/30min",
  site: "https://ticosystem.com",
  // Company bank account for the payment policy. Leave empty to say the
  // account is given in the quotation and contract instead.
  bank: { accountNumber: "", bankName: "", branch: "" },
  // Online support hours (Vietnam time, GMT+7) used by the policy pages.
  supportHours: {
    vi: "Thứ Hai đến Thứ Sáu 8:30 - 17:30, Thứ Bảy 8:30 - 12:00 (giờ Việt Nam, GMT+7)",
    en: "Monday to Friday 8:30 - 17:30, Saturday 8:30 - 12:00 (Vietnam time, GMT+7)",
  },
} as const;

export function legalName(lang: "en" | "vi") {
  return lang === "vi" ? COMPANY.legalNameVi : COMPANY.legalNameEn;
}
