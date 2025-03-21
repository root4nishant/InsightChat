"use client";

import { useEffect, useState } from "react";
import Section from "./reusables/Section";
// import Tag from "./Tag";
import Heading from "./reusables/Heading";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  DollarSign,
  Target,
  Timer,
} from "lucide-react";

const Benefits = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    {
      percentage: "60%",
      title: "Lower operational costs",
      description:
        "Automate workflows, reduce inefficiencies, and minimize staffing needs",
      icon: <DollarSign className="w-6 h-6 text-primary-dark" />,
      image:
        "https://storage.googleapis.com/cs-website-assets/homepage/benefits-1-dd.webp",
    },
    {
      percentage: "70%",
      title: "Increase in accuracy",
      description:
        "Boost precision with advanced data batching pipelines that outperform traditional LLMs",
      icon: <Target className="w-6 h-6 text-primary-dark" />,
      image:
        "https://storage.googleapis.com/cs-website-assets/homepage/benefits-2-dd.webp",
    },
    {
      percentage: "75%",
      title: "Faster results",
      description:
        "Simplify tasks, prioritize strategy, and deliver rapid results",
      icon: <Timer className="w-6 h-6 text-primary-dark" />,
      image:
        "https://storage.googleapis.com/cs-website-assets/homepage/benefits-3-dd.webp",
    },
  ];

  const renderMobileView = () => (
    <div className="flex flex-col gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col gap-2">
          {/* Accordion Header */}
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={() =>
                setSelectedCard(index === selectedCard ? -1 : index)
              }
              className={`w-full flex items-center justify-between p-2 lg:p-4 text-left transition-colors
              ${selectedCard === index ? "bg-white" : "hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2 lg:gap-4">
                  <div
                    className={`text-[28px] font-bold leading-tight transition-colors duration-300 ${
                      selectedCard === index
                        ? "text-primary-dark"
                        : "text-gray-600"
                    }`}
                  >
                    {stat.percentage}
                  </div>
                  <h3 className="text-[14px] lg:text-xl font-bold text-gray-900">
                    {stat.title}
                  </h3>
                  <p className="text-[14px] lg:text-xl text-gray-600 text-left">
                    {stat.description}
                  </p>
                </div>
              </div>
              {selectedCard === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
  
          {/* Accordion Content */}
          {selectedCard === index && (
            <div className="border rounded-lg shadow-md overflow-hidden relative bg-gradient-to-b from-gray-300 to-transparent">
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://storage.googleapis.com/cs-website-assets/homepage/homepage-benefits.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
  
              {/* Content Overlay */}
              <div className="relative z-10 p-4">
                <div className="rounded-lg overflow-hidden bg-[#EDEDFF] h-auto">
                  <Image
                    loading="lazy"
                    src={stat.image}
                    alt={stat.title}
                    width={1000}
                    height={150}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
  
  const renderDesktopView = () => (
    <div className="flex flex-col lg:flex-row gap-4 justify-between lg:max-h-[500px] mb-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          onClick={() => setSelectedCard(index)}
          className={`shadow-sm rounded-lg lg:p-5 p-2 text-left border cursor-pointer transition-all duration-300 w-full ${
            selectedCard === index
              ? "shadow-xl bg-white"
              : "border-gray-200 hover:shadow-xl bg-gray-50"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div
              className={`text-2xl lg:text-[42px] font-bold transition-colors duration-300 leading-tight font-primary ${
                selectedCard === index ? "text-primary-dark" : "text-gray-600"
              }`}
            >
              {stat.percentage}
            </div>
            <h3 className="text-[18px] font-semibold text-gray-800 font-primary">
              {stat.title}
            </h3>
            <p className="text-[18px] font-secondary text-gray-600 text-left">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderImageOverlay = () => (
    <div className="relative flex justify-center items-center aspect-[413/100] w-full z-10 overflow-hidden rounded-lg">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://storage.googleapis.com/cs-website-assets/homepage/homepage-benefits.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>
  {stats.map((stat, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
        selectedCard === index
          ? "opacity-100 z-30 transform scale-100"
          : "opacity-0 z-10 transform scale-95"
      }`}
        >
          <div className="flex justify-center items-center border rounded-lg shadow-md bg-gradient-to-b from-gray-300 to-transparent h-full">
            <Image
              loading="lazy"
              src={stat.image}
              alt={stat.title}
              width={1000} // Fixed width
              height={150} // Fixed height
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
  

  return (
    <Section className="flex flex-col lg:max-h-[600px]  w-full lg:mb-20 mb-0 ">
      <div className="lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 mx-auto">
        {/* <Tag text="Benefits" /> */}
        <Heading text="Experience the era of AI Performance" />
        {isMobile ? renderMobileView() : renderDesktopView()}
        {!isMobile && renderImageOverlay()}
      </div>
    </Section>
  );
};

export default Benefits;
