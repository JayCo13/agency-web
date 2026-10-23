import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyArticle } from "@/components/policies/PolicyLayout";
import { getPolicy, allPolicySlugs } from "@/lib/policies";

export function generateStaticParams() {
  return allPolicySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) return { title: "Không tìm thấy chính sách | TicoSystem" };
  const c = policy.vi;
  return {
    title: `${c.title} | TicoSystem`,
    description: c.summary,
    alternates: {
      canonical: `/vi/policies/${slug}`,
      languages: {
        en: `/policies/${slug}`,
        vi: `/vi/policies/${slug}`,
        "x-default": `/policies/${slug}`,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();
  return <PolicyArticle lang="vi" policy={policy} />;
}
