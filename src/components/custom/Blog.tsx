"use client";

import Image from "next/image";
import Section from "./reusables/Section";
import Heading from "./reusables/Heading";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./reusables/button";

const blogPosts = [
  {
    imageSrc: "/favicon.png",
    category: "Artificial Intelligence",
    date: "25 May, 2024",
    title: "GPUs Part 1 - Understanding GPU Internals",
    description:
      "LLMs are pretty big and can use a lot of computing power. Understanding GPU internals can help in optimizing performance and managing resources efficiently.",
  },
  {
    imageSrc: "/favicon.png",
    category: "Artificial Intelligence",
    date: "19 December, 2024",
    title: "How To Prepare Your Organization For Generative AI?",
    description:
      "Generative AI (GenAI) is revolutionizing industries, transforming how businesses operate, innovate, and create. Preparing your team and workflows is essential for a smooth AI-driven transition.",
  },
  {
    imageSrc: "/favicon.png",
    category: "Artificial Intelligence",
    date: "13 January, 2025",
    title: "AI Technologies And Copilots For Customer Support",
    description:
      "Explore how AI copilots for customer support enhance efficiency and customer satisfaction. Learn about tools and strategies to integrate AI-driven assistants into your business operations.",
  },
];

const BlogSection = () => {
  const [expandedPosts, setExpandedPosts] = useState<Record<number, boolean>>(
    {}
  );

  const toggleExpand = (index: number) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Section className="lg:py-20 py-10">
      <Heading text={"Latest Insights"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={400}
                height={250}
                className="w-full lg:h-60 h-40 object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            <div className="p-4">
              <div className="flex gap-2">
                <span className="text-xs font-semibold font-primary text-black bg-[#D6CFB6] px-2 py-1 rounded-md">
                  {post.category}
                </span>
                <p className="text-gray-500 text-sm mt-1 font-secondary">
                  {post.date}
                </p>
              </div>

              <h3 className="text-lg font-semibold mt-2 font-primary">
                {post.title}
              </h3>

              <p
                className={`text-gray-600 text-sm mt-1 font-secondary ${
                  expandedPosts[index] ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {post.description}
              </p>

              {!expandedPosts[index] && (
                <button
                  className="text-primary-dark text-sm font-medium mt-2 hover:underline"
                  onClick={() => toggleExpand(index)}
                >
                  Read more
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/blog" passHref>
          <Button className="lg:p-6 p-4 lg:w-[172px] md:w-[120px] w-[96px] h-[38px] lg:h-[60px] md:h-[44px] bg-[#D6CFB6] text-primary-dark rounded-sm lg:text-lg font-bold text-xs shadow-md hover:bg-black hover:text-white transition-colors duration-300">
            Learn More
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default BlogSection;
