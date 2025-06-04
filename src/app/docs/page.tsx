"use client";

import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/nav";
import {
  BarChart3,
  ChevronRight,
  Chrome,
  CreditCard,
  Database,
  FileText,
  Shield,
  Smartphone,
  Zap
} from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  type SectionType = "about" | null;
  type CardType = string | null;

  const [activeSection, setActiveSection] = useState<SectionType>(null);
  const [hoveredCard, setHoveredCard] = useState<CardType>(null);

  const pages = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboard",
      description:
        "Displays insights like sentiment, keywords, and AI-powered suggestions from chat analysis.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Plans",
      description:
        "Offers token plans powered by Razorpay to enable extended AI usage.",
      color: "from-purple-500 to-pink-500",
      hasLink: true,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Docs",
      description:
        "Provides app documentation, architecture, and usage instructions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Login/Register",
      description: "Securely handles user authentication via Clerk.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const steps = [
    {
      step: 1,
      text: "User logs in using Clerk authentication.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      step: 2,
      text: "Chrome extension captures chat data from WhatsApp Web and sends it to backend.",
      icon: <Chrome className="w-5 h-5" />,
    },
    {
      step: 3,
      text: "FastAPI backend uses Gemini AI to analyze data and store structured results in MongoDB.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      step: 4,
      text: "Frontend fetches results and visualizes them using Next.js and Recharts.",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      step: 5,
      text: "Users with low tokens are redirected to the Plans page to top-up via Razorpay.",
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      items: ["Next.js", "Tailwind CSS", "Recharts"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      category: "Backend",
      items: ["FastAPI", "MongoDB", "Gemini AI", "LangChain"],
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-100 text-green-700",
    },
    {
      category: "Auth",
      items: ["Clerk (session-based)"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      category: "Extension",
      items: ["Vanilla JavaScript for WhatsApp Web scraping"],
      icon: <Chrome className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-700",
    },
    {
      category: "Payments",
      items: ["Razorpay"],
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-700",
    },
  ];

  return (
    <>
    <Navbar />
      <div className="min-h-screen px-4 lg:px-20 lg:pt-20 pt-10 max-w-[1400px] mx-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InsightChat Documentation
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the power of AI-driven WhatsApp analytics
              </p>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-16">
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                activeSection === "about"
                  ? "ring-4 ring-blue-500/30 scale-[1.02]"
                  : ""
              }`}
              onClick={() =>
                setActiveSection(activeSection === "about" ? null : "about")
              }
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  About the App
                </h2>
                <ChevronRight
                  className={`w-6 h-6 ml-auto text-gray-400 transition-transform duration-300 ${
                    activeSection === "about" ? "rotate-90" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeSection === "about"
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-24 sm:max-h-20 opacity-70"
                }`}
              >
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  InsightChat is an AI-powered real-time WhatsApp chat analytics
                  platform designed for small businesses, educators, and
                  individuals. It features a browser extension that captures
                  chat data, a backend that processes insights using GenAI
                  (Gemini), and a Next.js frontend to display analytics
                  interactively. The system includes secure authentication
                  (Clerk), a token-based credit system, and optional automation
                  features.
                </p>
              </div>
            </div>
          </section>

          {/* Pages Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
              Available Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pages.map((page, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer ${
                    hoveredCard === `page-${index}` ? "z-10" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(`page-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${page.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />
                  <div className="relative">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${page.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {page.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                      {page.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {page.description}
                    </p>
                    {page.hasLink && (
                      <button
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105 shadow-lg"
                        aria-label="Navigate to Plans"
                      >
                        Visit to Pay <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
              How It Works
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`step-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-100 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`tech-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${tech.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {tech.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {tech.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        <span className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Floating Action Button
          <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
            <button
              className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-blue-500/25"
              aria-label="Code Shortcut"
            >
              <Code className="w-6 h-6" />
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
