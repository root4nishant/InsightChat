import { FaLinkedin } from "react-icons/fa6";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t w-full">
      <div className="mx-auto flex flex-col items-center max-w-[1400px] w-full px-4 lg:px-20 py-6 space-y-6">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between w-full space-y-4 sm:space-y-0">
          <div className="flex items-center justify-center space-x-4">
            <Image
              loading="lazy"
              src="/logo_new.png"
              alt="Logo"
              className="w-10"
              width={20}
              height={10}
            />
            <span className="text-xs sm:text-sm lg:text-sm text-gray-300">
              &copy; {new Date().getFullYear()} InsightChat AI
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <Link
              href="/privacyPolicy"
              className="text-xs sm:text-sm lg:text-sm text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsAndService"
              className="text-xs sm:text-sm lg:text-sm text-gray-300"
            >
              Terms of Service
            </Link>
            <div className="flex justify-center w-full sm:w-auto">
              <Link
                href="https://www.linkedin.com/in/srivastava4nishant/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-4 h-4 sm:w-6 sm:h-6 text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
        {/* Divider Line */}
        {/* <div
          className="w-[80%] sm:w-[70%] lg:w-[50%] mx-auto"
          style={{
            height: "1px",
            backgroundColor: "#93905C",
          }}
        ></div> */}
        {/* Address Section */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-2 text-gray-300 text-center space-y-2 sm:space-y-0">
          <MapPin className="w-6 h-6" />
          <p className="text-sm lg:text-base sm:text-base text-[12px] sm:leading-normal leading-tight">
            No 198, 2nd Floor, CMH Rd Stage 2, Indiranagar, Bangalore, Karnataka
            560038
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
