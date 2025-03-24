"use client";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full bg-gray-900 text-white w-64 hidden md:flex flex-col">
      <h2 className="text-lg font-bold p-4">Business Dashboard</h2>
      <nav className="flex-1">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Sidebar (Hamburger Menu) */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed top-4 left-4">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900 text-white">
          <h2 className="text-lg font-bold p-4">Business Dashboard</h2>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
