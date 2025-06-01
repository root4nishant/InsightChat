// app/dashboard/layout.tsx
"use client";

import Chatbot from "@/utils/Chatbot";
import React, { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Main content */}
      {children}

      {/* Toggle button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition w-12 h-12"
        onClick={() => setIsChatbotOpen((prev) => !prev)}
      >
        {isChatbotOpen ? "×" : "💬"}
      </button>

      {/* Chatbot panel */}
      {isChatbotOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[22rem]">
          <Chatbot />
        </div>
      )}
    </div>
  );
}
