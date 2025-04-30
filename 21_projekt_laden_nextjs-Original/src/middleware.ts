import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //Diese Middleware wird genau vor der Dashboard-Seite ausgeführt:
  //Dabei erstellen wir eine Konfiguration dafür und legen mit einem Matcher fest, dass sie nur im Dashboard ausgeführt wird.
  const token = request.cookies.get("token")?.value;

  if (token) { //Falls token es gibt, dann haben Benutzer Zugreif am Daschboard.
    return NextResponse.next();
  } //Aber wenn kein Token vorhanden ist, leite ihn direkt zur Login-Seite weiter, damit man sich einloggen kann:
  const url = new URL(request.url);
  url.pathname = "/login";
  return NextResponse.redirect(url.toString());
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
