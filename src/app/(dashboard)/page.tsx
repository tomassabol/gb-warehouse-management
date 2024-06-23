import { Heading } from "~/components/Headings/Heading";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <main>
      <Heading variant="h1">Dashboard</Heading>
      <div className="flex h-[90vh] flex-col items-center justify-center gap-2">
        <b>session</b>
        <p>{JSON.stringify(session, null, 2)}</p>
      </div>
    </main>
  );
}
