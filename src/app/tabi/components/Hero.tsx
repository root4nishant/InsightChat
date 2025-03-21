import { FC, ReactNode } from "react";
import { Button } from "@/components/custom/reusables/button";
import Section from "@/components/custom/reusables/Section";
import Tag from "@/components/custom/Tag";

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
    <div>
      <div
        className={` font-primary absolute inset-0 z-[-10]  bg-no-repeat lg:bg-fit bg-cover w-full mx-auto`}
      ></div>
      <div
        className={`absolute inset-0 ${
          gradientOverlay ||
          "bg-gradient-to-b from-gray-900/50 via-transparent to-white"
        } z-[-10] w-full mx-auto`}
      ></div>
      <Section className="flex flex-col items-center justify-center bg-no-repeat bg-cover relative py-0 pt-10">
        <div className="z-10 py-20 md:py-0 md:pt-28 lg:pt-24 pt-20">
          <div className="lg:max-w-5xl w-full mx-auto text-center lg:gap-8 gap-3 flex flex-col">
            <div className="flex flex-col gap-1">
              {tagText && <Tag text={tagText} />}
              <div className="flex flex-col lg:gap-2 gap-0">
                <div className="flex justify-center items-center">
                  <h1 className="text-[32px] md:text-5xl lg:text-5xl font-bold tracking-[0.4px] text-gray-900 font-primary">
                    {title}
                  </h1>
                  {highlightIcon && (
                    <span className="text-black items-center lg:block hidden ">
                      {highlightIcon}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 items-center text-[32px]  md:text-5xl lg:text-5xl font-bold tracking-[0.4px] justify-center">
                  <span className="text-primary-dark leading-tight">
                    {highlightText}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col  lg:gap-16 gap-8 justify-center items-center">
              <p className="text-sm md:text-lg lg:text-lg max-w-5xl mx-auto text-center font-secondary">
                {description}
              </p>
              <a href={buttonLink || "#"} target="_blank">
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
