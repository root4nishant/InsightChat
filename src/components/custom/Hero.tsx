import { FC, ReactNode } from "react";
import { Button } from "@/components/custom/reusables/button";
import Section from "./reusables/Section";
import Tag from "./Tag";

interface HeroSectionProps {
  gradientOverlay?: string;
  tagText?: string;
  title: string;
  highlightText: string;
  highlightIcon?: ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
  additionalButton?: {
    text: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost";
    className?: string;
    onClick?: () => void;
  };
}

const HeroSection: FC<HeroSectionProps> = ({
  gradientOverlay,
  tagText,
  title,
  highlightText,
  highlightIcon,
  description,
  buttonText,
  buttonLink,
  // additionalButton,
}) => {
  return (
    <div className=" w-full mx-auto">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-[-10] w-full h-full object-cover"
      >
        <source
          src="https://storage.googleapis.com/cs-website-assets/homepage/homepage-hero.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          gradientOverlay ||
          "bg-gradient-to-b from-gray-900/50 via-transparent to-white"
        } z-[-10]`}
      ></div>

      <Section className="flex flex-col items-center justify-center bg-no-repeat bg-cover relative">
        <div className="z-10 py-20 md:py-0 md:pt-28 lg:pt-24 pt-20">
          <div className="lg:max-w-5xl w-full mx-auto text-center lg:gap-8 gap-3 flex flex-col">
            <div className="flex flex-col gap-1">
              {tagText && <Tag text={tagText} />}
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.4px] text-gray-900 font-primary">
                  {title}
                </h1>
                <div className="flex gap-2 items-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.4px] justify-center">
                  <span className="text-primary-dark font-primary">
                    {highlightText}
                  </span>
                  {highlightIcon && (
                    <span className="text-primary-dark flex items-center  ">
                      {highlightIcon}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col  lg:gap-16 gap-8 justify-center items-center">
              <p className="text-sm md:text-xl max-w-5xl mx-auto text-center">
                {description}
              </p>
              <a href={buttonLink || "#"}>
                <Button className=" bg-primary-dark hover:bg-black text-white hover:text-white font-semibold py-6 rounded-md">
                  {buttonText}
                </Button>
              </a>
              {/* {additionalButton && (
                <Button
                  size={additionalButton.size || "lg"}
                  variant={additionalButton.variant || "outline"}
                  className={`${additionalButton.className || "border-2"}`}
                  onClick={additionalButton.onClick || undefined}
                >
                  {additionalButton.text}
                </Button>
              )} */}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HeroSection;
