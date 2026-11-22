import { NextResponse, type NextRequest } from "next/server";

// Send visitors of "/" to the French or English site based on their browser language.
export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const lang = accept.toLowerCase().startsWith("fr") ? "fr" : "en";
  return NextResponse.redirect(new URL(`/${lang}`, request.url));
}

export const config = { matcher: "/" };
