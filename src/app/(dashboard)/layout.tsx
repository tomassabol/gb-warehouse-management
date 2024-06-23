import { Navigation } from "~/components/Layout/Navigation";
import { Profile } from "~/components/Layout/Profile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation>
        <Profile />
      </Navigation>
      <div className="min-h-screen sm:pl-60">
        <main className="bg-background grid px-4 py-6">{children}</main>
      </div>
    </>
  );
}
