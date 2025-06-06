import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/nav";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import VideoWithMessages from "../tabi/components/Video";
// import BlogSection from "@/components/custom/Blog";

// Dynamically import components
const HeroSection = dynamic(() => import("@/components/custom/Hero"));
const Banner = dynamic(() => import("./components/Banner"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-secondary">
        <Suspense fallback={<div>Loading Hero Section...</div>}>
          <HeroSection
            gradientOverlay="bg-gradient-to-b from-black/30 via-transparent to-white"
            tagText="Introducing"
            // title="Your Store's"
            highlightText="Your AI Powered Chat Analysis Assistant"
            // highlightIcon={<Sparkle />}
            description="Unleash the power of AI to get instant analysis of your chats, save time, and boost customer satisfaction. Experience the future of customer service with InsightChat AI."
            buttonText="Try Demo"
            // buttonLink="https://calendly.com/srivastavanishant/30min"
            buttonLink="/dashboard"
          />
        </Suspense>
        <Suspense fallback={<div>Loading Video Section...</div>}>
          <VideoWithMessages />
        </Suspense>

        {/* <Suspense fallback={<div>Loading AI Team Section...</div>}>
          <AITeamSection />
        </Suspense> */}

        {/* Benefits Section with Full-Width Background */}
        {/* <Suspense fallback={<div>Loading Benefits...</div>}>
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-b from-primary-dark/10 to-white">
            <Benefits />
          </div>
        </Suspense> */}
        {/* <BlogSection /> sarthak blog is here*/}

        <Suspense fallback={<div>Loading Banner...</div>}>
          <div className="z-10 relative">
            <Banner
              message="Try InsightChat AI today & "
              buttonText="Try Demo"
              buttonLink="/dashboard"
              message2="elevate your business today"
            />
          </div>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
