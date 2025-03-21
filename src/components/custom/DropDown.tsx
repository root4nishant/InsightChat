import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/custom/reusables/button";
import Link from "next/link";

interface ProductsDropdownProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

export function ProductsDropdown({
  isOpen,
  closeDrawer,
}: ProductsDropdownProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed w-auto left-1/2 -translate-x-1/2 justify-center items-center px-4 lg:px-10 text-black z-[1000] mt-10 font-primary transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={closeDrawer}
    >
      <div className="xl:w-[1000px] lg:w-[800px] mx-auto">
        <div
          className={`bg-gradient-to-l from-[#c9c8d9] to-white rounded-md shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Tabi Product */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <div className="mb-6">
                  <Image
                    loading="lazy"
                    src="https://storage.googleapis.com/cs-website-assets/dropdown/clio-ai.webp"
                    alt="Tabi AI"
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-gray-700 mb-6 font-secondary">
                  Deliver seamless customer experiences and gain actionable
                  insights with intelligent AI agents.
                </p>
                <Link href="/clio">
                  <Button
                    className="bg-primary-dark hover:bg-black text-white font-medium rounded px-6 transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={closeDrawer}
                  >
                    Explore Clio
                  </Button>
                </Link>
              </div>

              {/* Clio Product */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
                <div className="mb-6">
                  <Image
                    loading="lazy"
                    src="https://storage.googleapis.com/cs-website-assets/dropdown/tabi-ai.webp"
                    alt="Clio AI"
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-gray-700 mb-6 font-secondary">
                  Effortlessly use Gen AI for tabular data with speed &
                  accuracy. Guess what, anyone can use it.
                </p>
                <Link href="/tabi">
                  <Button
                    className="bg-primary-dark hover:bg-black text-white font-medium rounded px-6 transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={closeDrawer}
                  >
                    Explore Tabi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
