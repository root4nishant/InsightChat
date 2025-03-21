import React from "react";
import clsx from "clsx";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return (
    <div>
      <h1
        className={clsx(
          "font-primary lg:text-[42px] md:text-[36px] text-[28px] font-bold text-gray-800 text-center lg:pb-10 pb-5",
          className
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
