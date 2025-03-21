import Image from "next/image";
import { Card } from "@/components/ui/card";
import Section from "@/components/custom/reusables/Section";
// import Tag from "@/components/custom/Tag";
import Heading from "@/components/custom/reusables/Heading";
import { Button } from "@/components/custom/reusables/button";

const cardData = [
  {
    id: 1,
    title: "Upload your Data",
    description:
      "Effortlessly upload your file or feed, and Tabi will seamlessly handle your large data, providing maximum ease and efficiency.",
    buttonText: "Learn More",
    imageSrc:
      "https://storage.googleapis.com/cs-website-assets/tabi/tabi-in-action-1-dd.webp",
    imageAlt: "Feature illustration",
    imageLeftOnLg: true,
  },
  {
    id: 2,
    title: "Experiment with Prompts",
    description:
      "Try various prompts on sample data, test and validate results, then easily scale successful outcomes across your entire dataset.",
    buttonText: "Explore Analytics",
    imageSrc:
      "https://storage.googleapis.com/cs-website-assets/tabi/tabi-in-action-2-dd.webp",
    imageAlt: "Analytics illustration",
    imageLeftOnLg: false,
  },
  {
    id: 3,
    title: "Export your File",
    description:
      "Let Tabi transform your data with ease, then export your file or publish updates directly to your feed - all with just one click.",
    buttonText: "Start Collaborating",
    imageSrc:
      "https://storage.googleapis.com/cs-website-assets/tabi/tabi-in-action-3-dd.webp",
    imageAlt: "Collaboration illustration",
    imageLeftOnLg: true,
  },
];

export default function TabiInAction() {
  return (
    <Section>
      {/* <Tag text="Features" /> */}
      <Heading text="Tabi in Action" />
      <div className="mx-auto lg:py-12 py-0 max-w-[1000px] border-none lg:space-y-12 space-y-4 flex flex-col items-center">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="overflow-hidden border-none shadow-none bg-transparent"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:gap-6 md:gap-4 gap-2">
              <div
                className={`relative h-[300px] lg:h-full min-h-[300px] ${
                  card.imageLeftOnLg ? "order-1" : "lg:order-2"
                }`}
              >
                <Image
                  loading="lazy"
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className=" object-contain"
                />
              </div>
              <div
                className={`p-6 flex flex-col justify-center lg:space-y-4 space-y-2 lg:items-start items-center lg:text-left text-center ${
                  card.imageLeftOnLg ? "order-2" : "lg:order-1"
                }`}
              >
                <h2 className="lg:text-2xl text-md md:text-xl font-bold tracking-tight">
                  {card.title}
                </h2>
                <p className="text-muted-foreground lg:text-lg text-sm md:text-lg font-secondary">
                  {card.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
        <a href="https://tabi.columsprout.ai/" target="_blank">
          <Button className="lg:p-6 p-4 lg:w-[172px] md:w-[120px] w-[96px] h-[38px] lg:h-[60px] md:h-[44px]  rounded-sm lg:text-lg font-bold text-xs shadow-md bg-primary-dark hover:bg-black text-white hover:text-white transition-colors duration-300">
            Try Tabi
          </Button>
        </a>
      </div>
    </Section>
  );
}
