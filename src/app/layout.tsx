import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { Providers } from "~/providers/Providers";
import { getServerAuthSession } from "~/server/auth";

export const metadata = {
  title: "GymBeam Warehouse Management",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background min-h-screen font-sans antialiased">
        <Providers session={session!}>{children}</Providers>
      </body>
    </html>
  );
}
