"use client";

import Image from "next/image";
import { CardProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/custom/reusables/button";
import { Sparkle } from "lucide-react";
import Link from "next/link";

interface ProductCardProps extends CardProps {
  images: string[];
  data: {
    images: string[];
    title: string;
    link: string;
    description: string;
    buttonText: string;
  };
}

export default function ReusableCard({ data }: ProductCardProps) {
  return (
    <Card className="w-full xl:max-w-2xl lg:max-w-full md:max-w-full overflow-hidden shadow-none border-none rounded-md rounded-b-none bg-gradient-to-b from-[#e0e0f1] via-white to-transparent p-2 flex flex-col gap-3">
      <Carousel className="w-full">
        <CarouselContent>
          {data?.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[2/1] w-full h-auto z-5 ">
                <Image
                  // loading="lazy"
                  src={image || "/placeholder.svg"}
                  alt={`${data?.title} - View ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <CardContent className=" p-0 pt-4 rounded-none lg:text-center xl:text-left text-center flex lg:gap-5 gap-3 flex-col">
        <h3 className="lg:text-[36px] md:text-[36px] text-2xl flex xl:justify-start lg:justify-center justify-center items-center gap-2 font-primary font-semibold">
          {data.title}{" "}
          <span>
            <Sparkle className="w-4 h-4 " />
          </span>{" "}
        </h3>
        <p className="font-secondary lg:text-[18px] text-sm text-muted-foreground">
          {data.description}
        </p>
        <Link href={data.link} passHref>
          <Button className=" font-bold text-white  text-sm rounded-sm py-6 hover:bg-black  ">
            {data.buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
