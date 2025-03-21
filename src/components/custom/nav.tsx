"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductsDropdown } from "./DropDown";
import MobileNavigation from "./MobileNav";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    setProductsOpen(false);
  };

  return (
    <div className="w-full fixed top-0 z-20 bg-transparent font-primary">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-20 mt-4">
        <header className="bg-[#1a1a1a] w-full rounded-md shadow-lg shadow-[#707070] py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-white font-semibold text-xl">
              <Image
                loading="lazy"
                src="/logo.png"
                alt="Logo"
                className="md:w-80 w-40 lg:w-60"
                width={200}
                height={40}
              />
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-md font-bold hidden lg:block transition-colors duration-300"
              >
                Products
              </Link>
              <ProductsDropdown
                isOpen={isProductsOpen}
                closeDrawer={handleMouseLeave}
              />
            </div>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white text-md font-bold hidden lg:block transition-colors duration-300"
            >
              Pricing
            </Link>
            {/* <Link
              href="/blogs"
              className="text-gray-300 hover:text-white text-md font-bold hidden lg:block transition-colors duration-300"
            >
              Blogs
            </Link> */}
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="https://tabi.columsprout.ai/"
              className="text-gray-300 hover:text-white text-md font-bold"
              target="_blank"
            >
              Try Tabi
            </a>
            <a href="https://calendly.com/meghav-columsprout" target="_blank">
              <Button
                variant="default"
                className="text-lg bg-transparent font-bold text-black rounded-sm border-white/20 hover:bg-white bg-secondary py-5 px-4"
              >
                Contact Us
              </Button>
            </a>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-gray-300 hover:text-white md:text-2xl text-lg focus:outline-none"
          >
            ☰
          </button>
        </header>
      </div>
      {isMobileMenuOpen && (
        <MobileNavigation
          isOpen={isMobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
