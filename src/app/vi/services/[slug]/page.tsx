import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getService, allServiceSlugs } from "@/lib/services";
import { getServiceSeo } from "@/lib/seo-meta";

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Không tìm thấy dịch vụ | TicoSystem" };
  const c = service.vi;
  const seo = getServiceSeo(slug, "vi");
  const title = seo?.title ?? c.metaTitle;
  const description = seo?.description ?? c.metaDescription;
  return {
    title,
    description,
    alternates: {
      canonical: `/vi/services/${slug}`,
      languages: {
        en: `/services/${slug}`,
        vi: `/vi/services/${slug}`,
        "x-default": `/services/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: `https://ticosystem.com/vi/services/${slug}`,
      title,
      description,
      images: ["/og.png"],
      locale: "vi_VN",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage lang="vi" service={service} />;
}
