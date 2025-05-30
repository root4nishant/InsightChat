import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)","/"]);
const allowedRoutes = ["/dashboard", "/plans", "/docs","/clio","/tabi"];

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  // Allow public routes (like sign-in)
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Protect all routes (require authentication)
  await auth.protect();

  // If the user tries to access any page *other than* /dashboard or /plans, redirect them
  // if (!allowedRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
