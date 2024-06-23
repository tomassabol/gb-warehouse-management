import { type useRouter } from "next/navigation";
import { signOut as nextAuthSignOut } from "next-auth/react";

import { env } from "~/env";
import { getBaseUrl } from "~/trpc/react";

export async function signOut(router: ReturnType<typeof useRouter>) {
  const baseUrl = getBaseUrl();
  const callbackUrl = `${env.NEXT_PUBLIC_COGNITO_URL}/logout?client_id=${env.NEXT_PUBLIC_COGNITO_CLIENT_ID}&logout_uri=${encodeURIComponent(baseUrl)}`;
  await nextAuthSignOut({ callbackUrl }).then(() => router.push(callbackUrl));
}
