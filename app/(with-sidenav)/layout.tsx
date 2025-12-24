import { Link } from "lucide-react";
import SideNav from "../_components/SideNav";
import TopNav from "../_components/TopNav";

export default function WithSideNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh bg-white text-black">
      <SideNav />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
