import React from "react";
import Section from "./Section";
import { Button } from "@/components/ui/button";

interface BannerProps {
  message: string;
  message2: string;
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC<BannerProps> = ({
  message,
  buttonText,
  buttonLink,
  message2,
}) => {
  return (
    <Section>
      <div className="bg-[#423EC7] bg-no-repeat bg-cover flex flex-col items-center justify-center lg:py-10 py-4 rounded-md w-full lg:h-[238px] md:h-[164px] h-[120px]">
        <div className="container mx-auto px-4  text-center flex flex-col lg:gap-8 md:gap-6 gap-3">
          <h2 className="text-sm lg:text-[36px] md:text-[24px] font-bold text-white">
            {message}
            <span className="text-[#D6CFB6] leading-none">{message2}</span>
          </h2>
          <div className="flex justify-center gap-6">
            <a href={buttonLink} target="_blank">
              <Button className="lg:p-6 p-4 lg:w-[172px] md:w-[120px] w-[96px] h-[38px] lg:h-[60px] md:h-[44px] bg-[#D6CFB6] text-primary-dark rounded-sm lg:text-lg font-bold text-xs shadow-md hover:bg-black hover:text-white transition-colors duration-300">
                {buttonText}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
