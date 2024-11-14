import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  // for locally 
  const token =  request.cookies.get("next-auth.session-token")?.value;
  console.log(token);
  console.log("middlewarew");
  // for production 
  // const token =  request.cookies.get("__Secure-next-auth.session-token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/dashboard",
};
