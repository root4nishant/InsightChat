// import Sidebar from "@/components/custom/Sidebar";

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
      <main className="max-w-[1400px] mx-auto">
        
        {children}
      </main>

      {/* User Profile Button */}
    </div>
  );
}
