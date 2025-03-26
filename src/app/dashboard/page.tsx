/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { sendSessionIdToExtension } from "@/utils/sendSessionToExtension";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useRouter } from "next/navigation";
import { Spinner } from "./Loader";

const COLORS = ["#10B981", "#FBBF24", "#EF4444"];

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { sessionId, isSignedIn } = useAuth();
  const [analysis, setAnalysis] = useState<any>(null);
  const [userInfo, setUserInfo] = useState<any>(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!sessionId) return;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user_info`, {
        headers: {
          "Content-Type": "application/json",
          "X-Clerk-Session-Id": sessionId,
        },
      });

      const data = await res.json();
      setUserInfo(data);
    };

    fetchUserInfo();
  }, [sessionId]);

  useEffect(() => {
    if (!isSignedIn || !sessionId) return;
    sendSessionIdToExtension(sessionId);
  }, [sessionId, isSignedIn]);

  useEffect(() => {
    const fetchAnalysis = async () => {
      if (!sessionId) return;
      try {
        const res = await fetch(`${baseUrl}/get_analysis`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Clerk-Session-Id": sessionId,
          },
        });
        const data = await res.json();
        if (data.analysis) {
          console.log(data.analysis);
          setAnalysis(data.analysis);
        } else {
          setAnalysis(null);
        }
      } catch (err) {
        console.error("Failed to fetch analysis:", err);
        setAnalysis(null);
      }
    };
    fetchAnalysis();
  }, [sessionId]);

  useEffect(() => {
    if (userInfo?.tokens < 5) {
      router.push("/plans");
    }
  }, [userInfo, router]);


  useEffect(() => {
    if (analysis) {
      setIsLoading(false);
    }
  }, [analysis]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  

  if (!analysis || Object.keys(analysis || {}).length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        {" "}
        {typeof window !== "undefined" && userInfo?.tokens !== undefined && (
          <span>Token Balance: {userInfo.tokens}</span>
        )}{" "}
        <br />
        No analysis available.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">AI Chat Analysis</h1>

      {typeof window !== "undefined" && userInfo?.tokens !== undefined && (
        <div className="flex justify-end mb-6">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm font-semibold text-sm flex items-center gap-2">
            🪙 <span>Tokens Left:</span>
            <span className=" text-green-700 px-2 py-0.5 rounded-md ">
              {userInfo.tokens}
            </span>
          </div>
        </div>
      )}

      {!analysis ? (
        <p className="text-center text-gray-500 mt-10">
          Loading or no analysis found yet.
        </p>
      ) : (
        <>
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3"> Summary</h2>
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="leading-relaxed">{analysis?.summary}</p>
            </div>
          </section>

          {/* Sentiment Chart */}
          {analysis.sentiment_counts &&
            Object.keys(analysis.sentiment_counts).length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                  Sentiment Distribution
                </h2>
                <div className="bg-white p-5 rounded-xl shadow-md flex justify-center">
                  <PieChart width={320} height={260}>
                    <Pie
                      dataKey="value"
                      data={Object.entries(analysis.sentiment_counts || {}).map(
                        ([key, value]) => ({ name: key, value })
                      )}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                    >
                      {Object.entries(analysis.sentiment_counts || {}).map(
                        (entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        )
                      )}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </section>
            )}
          {/* Keywords Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Keywords</h2>
            <div className="flex flex-wrap gap-3">
              {(analysis?.keywords || []).map((kw: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </section>

          {/* Recommended Actions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Recommended Actions</h2>
            <ul className="list-disc list-inside space-y-2 bg-white p-5 rounded-xl shadow-md">
              {(analysis?.recommended_actions || []).map(
                (action: string, i: number) => (
                  <li key={i}>{action}</li>
                )
              )}
            </ul>
          </section>

          {/* Insights */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(analysis?.insights || []).map((insight: any, i: number) => (
                <div key={i} className="border p-5 rounded-xl shadow bg-white">
                  <p>
                    <strong>Label:</strong> {insight?.label}
                  </p>
                  <p>
                    <strong>Type:</strong> {insight?.type}
                  </p>
                  <p>
                    <strong>Sentiment:</strong> {insight?.sentiment}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* More Insight CTA */}
          <div className="mt-10 text-center">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-200">
              More Insight
            </button>
          </div>
        </>
      )}
    </div>
  );
}
