// import Sidebar from "@/components/custom/Sidebar";
import Navbar from "@/components/custom/nav";
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
      <main className="max-w-[1400px] mx-auto w-full">
        
        {children}
      </main>

      {/* User Profile Button */}
    </div>
  );
}
