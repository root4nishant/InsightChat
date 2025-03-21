import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import React from "react";

const Section: React.FC<SectionProps> = ({ children, className, style }) => {
  return (
    <section style={style} className={cn("py-8 lg:py-12 mx-auto", className)}>
      {children}
    </section>
  );
};

export default Section;
