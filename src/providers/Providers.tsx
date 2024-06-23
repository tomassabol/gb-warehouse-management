"use client";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import { TRPCReactProvider } from "~/trpc/react";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <SessionProvider session={session}>
      <TRPCReactProvider>
        <Toaster />
        {children}
      </TRPCReactProvider>
    </SessionProvider>
  );
}
