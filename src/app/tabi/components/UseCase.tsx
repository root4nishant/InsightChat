import Heading from "@/components/custom/reusables/Heading";
// import Tag from "@/components/custom/Tag";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pencil } from "lucide-react";

const useCases = [
  {
    title: "Standardize format",
    description:
      "Make columns consistent, like fixing currency formats, dates, or case formatting.",
  },
  {
    title: "Optimize data",
    description:
      "Clean up columns by removing duplicates, fixing errors, or resizing content.",
  },
  {
    title: "Generate briefs",
    description:
      "Summarize detailed data into quick, easy-to-read overviews.",
  },
  {
    title: "Extract keywords",
    description: "Pick out important words or phrases from text for tagging or analysis.",
  },
  {
    title: "Derive new details",
    description:
      "Use data to calculate or figure out new fields (e.g., age from birthdate).",
  },
];

export default function UseCase() {
  return (
    <div className="w-full mx-auto py-12 lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4">
      {/* <Tag text="Use Cases" /> */}
      <Heading text="Choose from a Use Case suite" />

      <div className="lg:grid md:grid flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center ">
        {useCases.map((useCase, index) => (
          <Card
            key={index}
            className=" hover:bg-gray-100 transition-colors cursor-pointer rounded-sm lg:h-[192px]  justify-center items-center flex lg:w-full md:w-full w-[300px] "
          >
            <div className="lg:p-4 p-2  lg:gap-5 gap-3 flex flex-col">
              <CardHeader className="p-0">
                <CardTitle className="lg:text-2xl text-lg font-semibold">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-lg text-muted-foreground font-secondary">
                  {useCase.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}

        {/* Build Your Own Card */}
        <Card className=" hover:bg-gray-100 transition-colors cursor-pointer border-primary-dark rounded-sm lg:justify-center items-center justify-start flex lg:h-[192px] lg:w-full md:w-full md:h-full w-[300px]">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-md font-semibold flex justify-center items-center  gap-2">
              <Pencil className="w-4 h-4" />
              Or Build your Own!
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
