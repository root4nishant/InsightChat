"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { sendSessionIdToExtension } from "@/utils/sendSessionToExtension";

export default function DashboardPage() {
  const { sessionId, isSignedIn } = useAuth();
  const [analysis, setAnalysis] = useState<string>("Loading...");

  // Send session ID to extension
  useEffect(() => {
    if (!isSignedIn || !sessionId) return;
    sendSessionIdToExtension(sessionId);
  }, [sessionId, isSignedIn]);

  // Fetch analysis from backend
  useEffect(() => {
    const fetchAnalysis = async () => {
      if (!sessionId) return;

      try {
        const res = await fetch(
          "https://insight-chat-root.vercel.app/get_analysis",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Clerk-Session-Id": sessionId,
            },
          }
        );

        const data = await res.json();
        if (data.analysis) {
          setAnalysis(data.analysis);
        } else {
          setAnalysis("No analysis found yet.");
        }
      } catch (err) {
        console.error("❌ Failed to fetch analysis:", err);
        setAnalysis("Error fetching analysis.");
      }
    };

    fetchAnalysis();
  }, [sessionId]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold">AI Analysis:</h2>
        <p>{analysis}</p>
      </div>
    </div>
  );
}
