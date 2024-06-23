import { UserIcon } from "lucide-react";
import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";

import { SignOutAlert } from "../Auth/SignOutAlert";

export async function Profile() {
  const session = await getServerAuthSession();

  return (
    <div className="flex w-full items-center justify-between">
      <Link
        href="/settings/account"
        className="flex w-full flex-1 items-center space-x-3 overflow-hidden rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300"
      >
        <UserIcon size={18} />
        <span className="truncate text-sm font-medium">
          {session?.user.email}
        </span>
      </Link>
      <SignOutAlert />
    </div>
  );
}
