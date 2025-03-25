// import Sidebar from "@/components/custom/Sidebar";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* User Profile Button */}
      <div className="absolute top-4 right-4">
        <UserButton />
      </div>
    </div>
  );
}
