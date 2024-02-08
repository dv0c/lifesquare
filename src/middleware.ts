import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/cpanel") ||
    request.nextUrl.pathname.startsWith("/admin") ||
    request.nextUrl.pathname.startsWith("/admin") ||
    request.nextUrl.pathname.startsWith("/panel")
  ) {
    return NextResponse.redirect(
      new URL("https://fetch-articles.digitalpress.blog/ghost/#/dashboard")
    );
  }
}
