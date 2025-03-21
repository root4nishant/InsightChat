import React from "react";

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
  return (
    <div className="flex items-center justify-center py-4 font-primary">
      <div
        className={`lg:px-4 px-4 py-1 text-md text-primary font-semibold bg-gray-100 border-b-4 border-gray-300 rounded-md shadow-md shadow-[#a4a2a2] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
          className || ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tag;
