import Navbar from "@/components/custom/nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" mx-auto ">
      {children}
    </div>
  );
}
