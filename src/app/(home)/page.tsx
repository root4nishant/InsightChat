import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Sparkle } from "lucide-react";
// import BlogSection from "@/components/custom/Blog";

// Dynamically import components
const HeroSection = dynamic(() => import("@/components/custom/Hero"));
const AITeamSection = dynamic(() => import("@/components/custom/Ait"));
const Benefits = dynamic(() => import("@/components/custom/Benefits"));
const Banner = dynamic(() => import("./components/Banner"));

export default function Home() {
  return (
    <main className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-secondary">
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection
          gradientOverlay="bg-gradient-to-b from-black/30 via-transparent to-white"
          tagText="Introducing"
          title="Your Store's"
          highlightText="AI Concierge"
          highlightIcon={<Sparkle />}
          description="Unleash the power of AI to automate repetitive tasks, enhance your storefront experience, personalize customer interactions, and drive higher sales conversions effortlessly"
          buttonText="Book Demo"
          buttonLink="https://calendly.com/meghav-columsprout"
        />
      </Suspense>

      <Suspense fallback={<div>Loading AI Team Section...</div>}>
        <AITeamSection />
      </Suspense>

      {/* Benefits Section with Full-Width Background */}
      <Suspense fallback={<div>Loading Benefits...</div>}>
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-b from-primary-dark/10 to-white">
          <Benefits />
        </div>
      </Suspense>
      {/* <BlogSection /> sarthak blog is here*/}

      <Suspense fallback={<div>Loading Banner...</div>}>
        <div className="z-10 relative">
          <Banner
            message="Try Columsprout AI today & "
            buttonText="Try Tabi"
            buttonLink="https://tabi.columsprout.ai/"
            message2="elevate your storefront today"
          />
        </div>
      </Suspense>
    </main>
  );
}
