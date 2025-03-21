"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  const [isMobileProductOpen, setMobileProductOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 right-0 z-50 w-full h-screen backdrop-blur-lg flex flex-col transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl"
        aria-label="Close menu"
      >
        ✕
      </button>
      <ul className="flex flex-col items-start justify-start h-full gap-6">
        <div className="flex gap-2 bg-[#1a1a1a] w-full py-8 px-5 items-center">
          <Image
            loading="lazy"
            src="/logo.svg"
            alt="Logo"
            className="invert"
            width={30}
            height={30}
          />
          <h1 className="text-white font-semibold text-xl">Columsprout AI</h1>
        </div>
        <li className="w-full px-6">
          <button
            onClick={() => setMobileProductOpen(!isMobileProductOpen)}
            className="text-xl font-semibold w-full text-left flex items-center justify-start"
          >
            Products
          </button>
          {isMobileProductOpen && (
            <div className="mt-4 space-y-4 text-bold">
              <Link href="/tabi" className="block" onClick={onClose}>
                Tabi AI
              </Link>
              <Link href="/clio" className="block" onClick={onClose}>
                Clio AI
              </Link>
              <hr className=" bg-black" />
            </div>
          )}
        </li>
        <li className="w-full px-6">
          <a
            href="https://tabi.columsprout.ai/"
            className="text-black text-xl font-bold"
            target="_blank"
            onClick={onClose}
          >
            Try Tabi
          </a>
        </li>
        <li className="w-full px-6">
          <Link
            href="/pricing"
            className="text-black text-xl font-bold"
            onClick={onClose}
          >
            Pricing
          </Link>
        </li>
        {/* <li className="w-full px-6">
          <Link
            href="/blogs"
            className="text-black text-xl font-bold"
            onClick={onClose}
          >
            Blogs
          </Link>
        </li> */}
        <li className="w-full px-6">
          <Link
            href="https://calendly.com/meghav-columsprout"
            className="text-black text-xl font-bold"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
