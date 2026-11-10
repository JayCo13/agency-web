import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TemplatePreview from "@/components/templates/TemplatePreview";
import { PREVIEW_COPY } from "@/components/templates/previewCopy";
import { TEMPLATES, demoUrl, getTemplate } from "@/lib/templates";

const LANG = "vi" as const;

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ key: t.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ key: string }> }): Promise<Metadata> {
  const { key } = await params;
  const tpl = getTemplate(key);
  if (!tpl) return {};
  const c = PREVIEW_COPY[LANG];
  return {
    title: `${c.title}: ${tpl[LANG].industry} | TicoSystem`,
    description: tpl[LANG].blurb,
    // Trang chỉ có khung xem thử: để Google index trang danh sách thay vì trang này
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const tpl = getTemplate(key);
  if (!tpl) notFound();
  const c = PREVIEW_COPY[LANG];
  return (
    <TemplatePreview
      url={demoUrl(tpl)}
      title={tpl.shopName}
      industry={tpl[LANG].industry}
      backHref={`${c.base}#${tpl.key}`}
      useHref={c.contact}
      copy={c}
    />
  );
}
