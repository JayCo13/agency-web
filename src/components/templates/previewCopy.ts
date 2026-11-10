import type { Lang } from "@/lib/templates";

export const PREVIEW_COPY: Record<Lang, { base: string; contact: string; back: string; desktop: string; mobile: string; newTab: string; use: string; loading: string; device: string; title: string }> = {
  vi: {
    base: "/vi/templates",
    contact: "/vi/#contact",
    back: "Tất cả mẫu",
    desktop: "Máy tính",
    mobile: "Điện thoại",
    newTab: "Mở tab mới",
    use: "Dùng mẫu này",
    loading: "Đang mở web mẫu…",
    device: "Khổ màn hình",
    title: "Xem thử mẫu",
  },
  en: {
    base: "/templates",
    contact: "/#contact",
    back: "All templates",
    desktop: "Desktop",
    mobile: "Phone",
    newTab: "Open in new tab",
    use: "Use this template",
    loading: "Loading the demo store…",
    device: "Screen size",
    title: "Try the template",
  },
};
