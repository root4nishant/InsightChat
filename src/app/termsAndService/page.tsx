"use client";

import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/nav";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */


import {
  AlertTriangle,
  ChevronRight,
  Clock,
  CreditCard,
  FileText,
  Gavel,
  Mail,
  Scale,
  Shield,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";

  
type SectionId =
  | "acceptance"
  | "user-accounts"
  | "payment-terms"
  | "data-usage"
  | "intellectual-property"
  | "limitations"
  | "termination"
  | null;

interface SectionContent {
  subtitle: string;
  items: string[];
}

interface Section {
  id: SectionId;
  title: string;
  icon: JSX.Element;
  color: string;
  content: SectionContent[];
}


export default function TermsOfServicePage() {

  const [activeSection, setActiveSection] = useState<SectionId>(null);
  const [hoveredCard, setHoveredCard] = useState<SectionId>(null);

  // const toggleSection = (sectionId: SectionId) => {
  //   setActiveSection(activeSection === sectionId ? null : sectionId);
  // };

  const sections:Section[] = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      content: [
        {
          subtitle: "Agreement to Terms",
          items: [
            "By accessing or using InsightChat, you agree to be bound by these Terms of Service",
            "You must be at least 18 years old or have parental consent to use our services",
            "If you disagree with any part of these terms, you may not access the service",
            "We reserve the right to update these terms at any time with notice to users",
          ],
        },
        {
          subtitle: "Service Description",
          items: [
            "InsightChat provides AI-powered WhatsApp chat analytics and insights",
            "Our service includes browser extension, web dashboard, and AI analysis features",
            "Access to certain features requires token purchases through our payment system",
            "Service availability may vary based on technical limitations or maintenance",
          ],
        },
      ],
    },
    {
      id: "user-accounts",
      title: "User Accounts & Responsibilities",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      content: [
        {
          subtitle: "Account Creation",
          items: [
            "You must provide accurate and complete information when creating an account",
            "You are responsible for maintaining the security of your account credentials",
            "One person or entity may not maintain multiple accounts",
            "You must notify us immediately of any unauthorized use of your account",
          ],
        },
        {
          subtitle: "User Conduct",
          items: [
            "Use the service only for lawful purposes and in accordance with these Terms",
            "Do not attempt to reverse engineer, hack, or exploit our systems",
            "Respect the privacy and rights of other users and third parties",
            "Do not use the service to analyze chats without proper consent from participants",
          ],
        },
      ],
    },
    {
      id: "payment-terms",
      title: "Payment & Billing",
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      content: [
        {
          subtitle: "Token System",
          items: [
            "Our service operates on a token-based credit system for AI analysis features",
            "Tokens are consumed based on the complexity and volume of chat analysis",
            "Token purchases are final and non-refundable except as required by law",
            "Unused tokens do not expire but may be subject to account closure policies",
          ],
        },
        {
          subtitle: "Payment Processing",
          items: [
            "All payments are processed securely through Razorpay",
            "You authorize us to charge your selected payment method for purchases",
            "All prices are listed in the currency specified at the time of purchase",
            "You are responsible for any taxes or fees associated with your purchases",
          ],
        },
      ],
    },
    {
      id: "data-usage",
      title: "Data Usage & Privacy",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      content: [
        {
          subtitle: "Data Collection",
          items: [
            "We collect WhatsApp chat data only when you actively use our browser extension",
            "Chat data is processed temporarily for analysis and is not permanently stored",
            "We collect usage analytics to improve our service quality",
            "Personal information is handled according to our Privacy Policy",
          ],
        },
        {
          subtitle: "Consent & Permissions",
          items: [
            "You must have appropriate consent to analyze chats involving other people",
            "You are solely responsible for compliance with privacy laws in your jurisdiction",
            "We are not liable for any misuse of chat data or privacy violations by users",
            "You grant us permission to process your data as described in our Privacy Policy",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
      content: [
        {
          subtitle: "Our Rights",
          items: [
            "InsightChat and all related trademarks, logos, and content are our property",
            "The AI models, algorithms, and software are protected by intellectual property laws",
            "You may not copy, modify, or distribute our proprietary technology",
            "Any feedback or suggestions you provide may be used to improve our services",
          ],
        },
        {
          subtitle: "Your Rights",
          items: [
            "You retain ownership of your original chat data and content",
            "Analysis results and insights generated from your data belong to you",
            "You may export your data and analysis results at any time",
            "We do not claim ownership over your personal information or chat content",
          ],
        },
      ],
    },
    {
      id: "limitations",
      title: "Service Limitations & Disclaimers",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      content: [
        {
          subtitle: "Service Availability",
          items: [
            "We strive for 99.9% uptime but cannot guarantee uninterrupted service",
            "Maintenance, updates, or technical issues may temporarily affect availability",
            "Third-party service dependencies (WhatsApp, AI providers) may impact functionality",
            "We reserve the right to modify or discontinue features with reasonable notice",
          ],
        },
        {
          subtitle: "AI Analysis Disclaimers",
          items: [
            "AI-generated insights are provided for informational purposes only",
            "Analysis results may not always be 100% accurate or complete",
            "You should not rely solely on AI insights for important decisions",
            "We are not responsible for decisions made based on our analysis results",
          ],
        },
      ],
    },
    {
      id: "termination",
      title: "Account Termination",
      icon: <Scale className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      content: [
        {
          subtitle: "Termination by You",
          items: [
            "You may terminate your account at any time through your account settings",
            "Upon termination, your access to paid features will cease immediately",
            "You may request data export before account closure",
            "Unused tokens are forfeited upon voluntary account termination",
          ],
        },
        {
          subtitle: "Termination by Us",
          items: [
            "We may terminate accounts for violation of these Terms of Service",
            "Accounts may be suspended for suspicious activity or security concerns",
            "We will provide reasonable notice before termination unless immediate action is required",
            "Upon termination, all data associated with your account will be deleted",
          ],
        },
      ],
    },
  ];

  const toggleSection = (sectionId: SectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };


  return (
    <>
      <Navbar />
      <div className="min-h-screen lg:pt-20 pt-10 bg-gradient-to-br from-slate-50 via-red-50 to-orange-100">
        <div className="max-w-6xl mx-auto p-6">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Please read these terms carefully before using InsightChat
                services.
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                Last updated: May 31, 2025
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-200/50">
              <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Important Notice
              </h3>
              <p className="text-orange-700 leading-relaxed">
                By using InsightChat, you agree to these Terms of Service. These
                terms create a legal agreement between you and InsightChat.
                Please ensure you understand your rights and responsibilities
                before using our services.
              </p>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                  activeSection === section.id
                    ? "ring-4 ring-red-500/30 scale-[1.02]"
                    : ""
                }`}
                onClick={() => toggleSection(section.id)}
                onMouseEnter={() => setHoveredCard(section.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        section.color
                      } rounded-xl flex items-center justify-center mr-4 shadow-lg transition-transform duration-300 ${
                        hoveredCard === section.id ? "scale-110" : ""
                      }`}
                    >
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 flex-grow">
                      {section.title}
                    </h2>
                    <ChevronRight
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                        activeSection === section.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeSection === section.id
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-6 pt-4">
                      {section.content.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="border-l-4 border-gray-200 pl-6"
                        >
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">
                            {item.subtitle}
                          </h4>
                          <ul className="space-y-2">
                            {item.items.map((listItem, listIndex) => (
                              <li key={listIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 leading-relaxed">
                                  {listItem}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Liability Notice */}
          <div className="mt-12 mb-8">
            <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Limitation of Liability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                InsightChat provides services "as is" without warranties. We are
                not liable for indirect, incidental, or consequential damages.
                Our total liability is limited to the amount you paid for our
                services in the 12 months preceding any claim.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-600/10 rounded-2xl p-8 border border-red-200/50">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service or need
                  clarification on any points, our legal team is here to help.
                </p>
                <Link
                  href="mailto:connect@rootnishant.in"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Legal Team
                  <Mail className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
