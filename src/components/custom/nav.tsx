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
        <header className="bg-[#1a1a1a] w-full rounded-md shadow-lg shadow-[#707070] py-3 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-semibold  flex items-center justify-center lg:gap-4 gap-3"
            >
              <Image
                loading="lazy"
                src="/logo_new.png"
                alt="Logo"
                className=" w-8 lg:w-10"
                width={200}
                height={40}
              />
              <div className="text-gray-300 font-semibold lg:text-2xl md:text-lg text-md">
                InsightChat AI
              </div>
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* <Link
                href="#"
                className="text-gray-300 hover:text-white text-md font-bold hidden lg:block transition-colors duration-300"
              >
                Products
              </Link> */}
              <ProductsDropdown
                isOpen={isProductsOpen}
                closeDrawer={handleMouseLeave}
              />
            </div>

            {/* <Link
              href="/blogs"
              className="text-gray-300 hover:text-white text-md font-bold hidden lg:block transition-colors duration-300"
            >
              Blogs
            </Link> */}
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/plans"
              className="text-gray-300 hover:text-white text-md font-bold hidden lg:block transition-colors duration-300"
            >
              Pricing
            </Link>
            <a
              href="/docs"
              className="text-gray-300 hover:text-white text-md font-bold"
            >
              Docs
            </a>

            <a
              href="https://calendly.com/srivastavanishant/30min"
              target="_blank"
            >
              <Button
                variant="default"
                className="text-lg bg-transparent font-bold text-black rounded-sm border-white/20 hover:bg-white bg-gray-300 py-5 px-4"
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
