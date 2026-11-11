// Related service pages shown under each blog article.
// Gives every post at least two contextual internal links to the matching
// service landing page(s), so link equity flows from blog → money pages.

import { getService, type Service } from "@/lib/services";

/** Explicit mapping for existing posts (slug → service slugs, most relevant first). */
const BY_POST: Record<string, string[]> = {
  "how-much-does-a-custom-web-app-cost": ["web-development", "custom-systems"],
  "off-the-shelf-vs-custom-system": ["custom-systems", "web-development"],
  "real-cost-of-ai-chatbot": ["ai-chatbots", "automation"],
  "what-is-a-product-configurator": ["product-configurators", "ecommerce"],
  "which-tasks-to-automate-first": ["automation", "ai-chatbots"],
  "shopify-vs-custom-ecommerce": ["ecommerce", "web-development"],
  "bao-gia-chatbot-ai-cho-website": ["ai-chatbots", "automation"],
};

/** Fallback for new posts: match a tag (case/space-insensitive) to a service. */
const BY_TAG: Record<string, string> = {
  "web-development": "web-development",
  "custom-software": "custom-systems",
  "custom-systems": "custom-systems",
  saas: "custom-systems",
  "ai-chatbots": "ai-chatbots",
  automation: "automation",
  "process-automation": "automation",
  "product-configurators": "product-configurators",
  cpq: "product-configurators",
  ecommerce: "ecommerce",
  shopify: "ecommerce",
};

function norm(tag: string): string {
  return tag.trim().toLowerCase().replace(/[\s_]+/g, "-");
}

export function relatedServices(slug: string, tags: string[]): Service[] {
  const slugs: string[] = [...(BY_POST[slug] ?? [])];
  for (const tag of tags) {
    const s = BY_TAG[norm(tag)];
    if (s && !slugs.includes(s)) slugs.push(s);
  }
  return slugs
    .slice(0, 2)
    .map((s) => getService(s))
    .filter((s): s is Service => !!s);
}
