import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Auto-route visitors to their language on the site root only.
//
// Priority:
//   1. An explicit NEXT_LOCALE cookie (set when the user clicks EN/VI) always wins.
//   2. Otherwise fall back to the browser's Accept-Language header.
//
// The English home page lives at "/", Vietnamese at "/vi". Googlebot crawls with
// en, so it still sees English at "/" — hreflang points it to /vi. We only touch
// "/" (see matcher), so /blog, /vi, etc. are never redirected.
export function proxy(request: NextRequest) {
  const locale = request.cookies.get("NEXT_LOCALE")?.value;

  if (locale === "en") return NextResponse.next();
  if (locale === "vi") {
    return NextResponse.redirect(new URL("/vi", request.url));
  }

  // No explicit choice yet — infer from the browser.
  const accept = request.headers.get("accept-language") ?? "";
  const prefersVietnamese = accept
    .split(",")
    .some((part) => part.trim().toLowerCase().startsWith("vi"));

  if (prefersVietnamese) {
    return NextResponse.redirect(new URL("/vi", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
