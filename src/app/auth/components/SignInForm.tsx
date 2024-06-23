"use client";
import { signIn } from "next-auth/react";

import { Button } from "~/components/ui/button";

export function SignInForm() {
  const handleSignIn = async () =>
    await signIn("cognito", { callbackUrl: "/" });
  return (
    <Button
      onClick={handleSignIn}
      className="w-full max-w-72 font-semibold text-white"
      variant="gb_primary"
    >
      Sign In
    </Button>
  );
}
