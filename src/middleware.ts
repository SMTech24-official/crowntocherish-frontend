import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  });

  const method = request.method;

  // Allow POST requests without token validation
  if (method === "POST") {
    return NextResponse.next();
  }

  // Require token for GET and other methods
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Optional: Role-based redirection for admin paths
  if (token.role !== "admin") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// Matching specific paths
export const config = {
  matcher: [
    "/admin/dashboard",
    "/admin/dashboard/subscriber",
    "/admin/dashboard/feedback",
    "/api/feedbacks",
    "/api/subscriber",
  ],
};
