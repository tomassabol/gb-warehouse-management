export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/api/trpc/:path*", "/", "/shipments/:path*", "/settings/:path*"],
};
