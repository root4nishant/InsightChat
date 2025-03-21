import React from "react";
import PricingTabs from "./components/Tabs";
import Banner from "../(home)/components/Banner";

function PricingPage() {
  return (
    <div className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-secondary">
      <PricingTabs />
      <Banner
        message="Try Columsprout AI today & "
        buttonText="Try Now"
        buttonLink="/try"
        message2="Elevate your Storefront"
      />
    </div>
  );
}

export default PricingPage;
