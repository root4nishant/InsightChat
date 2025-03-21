"use client";

import Section from "@/components/custom/reusables/Section";
// import Tag from "@/components/custom/Tag";
import Heading from "@/components/custom/reusables/Heading";

const Benefits = () => {
  const stats = [
    {
      percentage: "70%",
      title: "Reduced AHT",
      description:
        "Track all your storefront customer interactions in real time and ensure seamless support",
    },
    {
      percentage: "35%",
      title: "Less Tickets / order",
      description:
        "Proactively guide with product details, reviews, loyalty perks, and policies when it matters",
    },
    {
      percentage: "30%",
      title: "Increased CSAT",
      description:
        "Recommend the right products, the best deals and reliably resolve storefront queries",
    },
  ];

  const renderStats = () => (
    <div className="flex flex-col md:flex-row justify-between md:gap-6 gap-2 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-lg lg:p-5 p-3 border cursor-pointer transition-all duration-300 w-full
          shadow-xl bg-white hover:shadow-2xl hover:shadow-gray-300 texl-left"
        >
          <div className="flex flex-col lg:gap-4 gap-2">
            <div className="lg:text-[42px] md:text-3xl text-2xl font-semibold transition-colors duration-300 text-primary-dark">
              {stat.percentage}
            </div>
            <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-800">
              {stat.title}
            </h3>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 font-secondary">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="">
      {/* Background image */}
      {/* <div
        className={`absolute inset-0 z-[-10] bg-[url("/hero.png")] bg-no-repeat bg-cover w-full`}
      ></div> */}

      {/* Gradient overlay */}
      {/* <div
        className={`absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-white z-[-10] w-full`}
      ></div> */}

      {/* Section content */}
      <Section className=" flex flex-col items-center justify-between lg:py-20 w-full">
        <div className="z-10 mx-auto w-full">
          {/* <Tag text="Benefits" /> */}
          <Heading text="Unlock Transformative Benefits" className="pb-0" />
          <div className="mt-8">{renderStats()}</div>
        </div>
      </Section>
    </div>
  );
};

export default Benefits;
