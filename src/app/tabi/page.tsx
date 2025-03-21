import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Sparkle } from "lucide-react";

// Dynamically import components
const HeroSection = dynamic(() => import("./components/Hero"));
const VideoWithMessages = dynamic(() => import("./components/Video"));
const TabiInAction = dynamic(() => import("./components/Action"));
const FAQ = dynamic(() => import("./components/FAQs"));
const UseCase = dynamic(() => import("./components/UseCase"));
const Banner = dynamic(() => import("@/components/custom/reusables/Banner"));

function TabiPage() {
  return (
    <div className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-primary">
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection
          gradientOverlay="bg-gradient-to-b from-black/30 via-transparent to-white"
          tagText="Introducing Tabi"
          title="Tabi AI"
          highlightText="Transform Data at Speed"
          highlightIcon={<Sparkle />}
          description="Use Tabi AI to clean, enrich, and transform your store's data with unmatched speed and accuracy"
          buttonText="Try Tabi"
          buttonLink="https://tabi.columsprout.ai/"
        />
      </Suspense>

      <Suspense fallback={<div>Loading Video Section...</div>}>
        <VideoWithMessages />
      </Suspense>

      <Suspense fallback={<div>Loading Tabi in Action Section...</div>}>
        <TabiInAction />
      </Suspense>

      <div className="relative w-[100vw] left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-b from-primary-dark/10 to-white">
        <Suspense fallback={<div>Loading Use Cases...</div>}>
          <UseCase />
        </Suspense>

        <Suspense fallback={<div>Loading FAQ...</div>}>
          <FAQ />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading Banner...</div>}>
        <Banner
          message="Empower your growth teams "
          buttonText="Try Tabi"
          buttonLink="https://tabi.columsprout.ai/"
          message2="Try Tabi today!"
        />
      </Suspense>
    </div>
  );
}

export default TabiPage;
