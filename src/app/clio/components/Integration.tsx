import Heading from "@/components/custom/reusables/Heading";
import Section from "@/components/custom/reusables/Section";
// import Tag from "@/components/custom/Tag";
import Image from "next/image";
import React from "react";

function Integration() {
  return (
    <Section className="lg:py-0">
      {/* <Tag text="Integrations" /> */}
      <div className="flex flex-col gap-5">
        <Heading
          className="lg:pb-0 pb-0"
          text="Connect your E-comm tech stack"
        />
        <h1 className="text-primary-dark lg:text-lg text-sm text-center font-secondary">
          Effortlessly integrate with all your existing customer channels
        </h1>
        <Image
          loading="lazy"
          src="https://storage.googleapis.com/cs-website-assets/clio/clio-integrations-dd.webp"
          alt="Integration"
          width={1000}
          height={400}
          className="items-center mx-auto w-full"
        />
      </div>
    </Section>
  );
}

export default Integration;
