import Link from "next/link";
import { redirect } from "next/navigation";

import { Logo } from "~/components/Layout/Logo";
import { getServerAuthSession } from "~/server/auth";

import { SignInForm } from "./components/SignInForm";

export default async function AuthPage() {
  const session = await getServerAuthSession();
  if (session?.user?.id) {
    return redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Link href="/" className="flex w-56 flex-col items-center justify-center">
        <Logo />
        <p className="font-semibold text-gray-800/85">Warehouse Management</p>
      </Link>
      <SignInForm />
    </main>
  );
}
