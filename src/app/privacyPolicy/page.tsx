
"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  Bell,
  FileText,
  ChevronRight,
  Clock,
  Mail,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Email address and name (via Clerk authentication)",
            "WhatsApp chat data (when you use the browser extension)",
            "Payment information (processed securely via Razorpay)",
            "Usage analytics and app interaction data",
          ],
        },
        {
          subtitle: "Technical Information",
          items: [
            "IP address and browser information",
            "Device identifiers and operating system details",
            "App usage patterns and feature interactions",
            "Error logs and performance metrics",
          ],
        },
      ],
    },
    {
      id: "data-usage",
      title: "How We Use Your Data",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      content: [
        {
          subtitle: "Core Services",
          items: [
            "Analyze WhatsApp chats using AI to provide insights",
            "Generate sentiment analysis and keyword extraction",
            "Create personalized analytics dashboards",
            "Process payments and manage your token balance",
          ],
        },
        {
          subtitle: "Service Improvement",
          items: [
            "Improve AI model accuracy and performance",
            "Enhance user experience and interface design",
            "Develop new features based on usage patterns",
            "Ensure system security and prevent abuse",
          ],
        },
      ],
    },
    {
      id: "data-protection",
      title: "Data Protection & Security",
      icon: <Lock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "End-to-end encryption for all data transmission",
            "Secure cloud storage with MongoDB Atlas",
            "Regular security audits and vulnerability assessments",
            "Multi-factor authentication via Clerk",
          ],
        },
        {
          subtitle: "Data Handling",
          items: [
            "Chat data is processed temporarily and not permanently stored",
            "AI analysis results are anonymized when possible",
            "Automatic data deletion after specified retention periods",
            "No sharing of personal data with third parties without consent",
          ],
        },
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      content: [
        {
          subtitle: "Integrated Services",
          items: [
            "Clerk - Authentication and user management",
            "Google Gemini AI - Chat analysis and insights generation",
            "Razorpay - Payment processing and billing",
            "MongoDB Atlas - Secure data storage",
          ],
        },
        {
          subtitle: "Service Responsibilities",
          items: [
            "Each service has its own privacy policy and terms",
            "We carefully vet all third-party integrations",
            "Data sharing is limited to necessary functionality only",
            "We monitor third-party compliance with privacy standards",
          ],
        },
      ],
    },
    {
      id: "user-rights",
      title: "Your Rights & Controls",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
      content: [
        {
          subtitle: "Data Rights",
          items: [
            "Access - Request copies of your personal data",
            "Correction - Update or correct inaccurate information",
            "Deletion - Request removal of your data from our systems",
            "Portability - Export your data in a readable format",
          ],
        },
        {
          subtitle: "Privacy Controls",
          items: [
            "Control which chats are analyzed through the extension",
            "Manage notification preferences and communications",
            "Review and delete your analysis history",
            "Opt-out of non-essential data collection",
          ],
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: <Bell className="w-6 h-6" />,
      color: "from-teal-500 to-blue-500",
      content: [
        {
          subtitle: "Essential Cookies",
          items: [
            "Authentication cookies for secure login sessions",
            "Preference cookies to remember your settings",
            "Security cookies to prevent unauthorized access",
            "Performance cookies to optimize app functionality",
          ],
        },
        {
          subtitle: "Analytics & Marketing",
          items: [
            "Usage analytics to improve user experience",
            "Feature usage tracking for product development",
            "Error tracking to identify and fix issues",
            "No third-party advertising or tracking cookies",
          ],
        },
      ],
    },
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Your privacy is our priority. Learn how we protect and handle your
              data.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: May 31, 2025
            </div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-200/50">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Quick Summary
            </h3>
            <p className="text-green-700 leading-relaxed">
              InsightChat collects WhatsApp chat data to provide AI-powered
              analytics. We use secure encryption, don't store chats
              permanently, and give you full control over your data. We partner
              with trusted services like Clerk and Razorpay to ensure security
              and functionality.
            </p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                activeSection === section.id
                  ? "ring-4 ring-blue-500/30 scale-[1.02]"
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
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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

        {/* Contact Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-200/50">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Questions About Privacy?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or how we
                handle your data, please don't hesitate to contact us.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
                <Mail className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
