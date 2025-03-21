// import Tag from "./Tag";
import ReusableCard from "./reusables/Card";
import Heading from "./reusables/Heading";
import Section from "./reusables/Section";

export default function AITeamSection() {
  const productData = [
    {
      images: [
        "https://storage.googleapis.com/cs-website-assets/homepage/homepage-carousel-clio-1-dd.webp",
        "https://storage.googleapis.com/cs-website-assets/homepage/homepage-carousel-clio-2-dd.webp",
      ],
      title: "Clio AI",
      description:
        "Seamlessly transform meaningful customer interactions into sales with your store's AI concierge",
      buttonText: "Explore Clio",
      link: "/clio",
    },
    {
      images: [
        "https://storage.googleapis.com/cs-website-assets/homepage/homepage-carousel-tabi-1-dd.webp",
        "https://storage.googleapis.com/cs-website-assets/homepage/homepage-carousel-tabi-2-dd.webp",
        "https://storage.googleapis.com/cs-website-assets/homepage/homepage-carousel-tabi-3-dd.webp",
      ],
      title: "Tabi AI",
      description:
        "Effortlessly leverage Gen AI to optimize your store data with unparalleled speed & accuracy",
      buttonText: "Explore Tabi",
      link: "/tabi",
    },
  ];
  return (
    <Section className="">
      <div className="mx-auto text-center flex flex-col">
        {/* <Tag text="Features" /> */}
        <Heading text="Meet your AI Team" />
      </div>
      <div className="flex xl:flex-row md:flex-col flex-col justify-between items-center lg:gap-20 gap-10">
        <ReusableCard
          data={productData[0]}
          images={[]}
          title={""}
          description={""}
          buttonText={""}
        />
        <ReusableCard
          data={productData[1]}
          images={[]}
          title={""}
          description={""}
          buttonText={""}
        />
      </div>
    </Section>
  );
}
