// import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // for locally
  // const token = await getToken({
  //   req: request,
  //   secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  // });
  // for production
  const token =  request.cookies.get("__Secure-next-auth.session-token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // if (token.role !== "admin") {
  //   return NextResponse.redirect(new URL("/admin", request.url));
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/dashboard", "/admin/dashboard/subscriber", "/admin/dashboard/feedbacks"],
};

