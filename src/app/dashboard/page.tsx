/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { sendSessionIdToExtension } from "@/utils/sendSessionToExtension";
import { useRouter } from "next/navigation";
import { Spinner } from "./Loader";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const COLORS = ["#10B981", "#FBBF24", "#EF4444"];

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [mlInsights, ] = useState<any>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [userInfo, setUserInfo] = useState<any>(null);

  const { sessionId, isSignedIn } = useAuth();
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // const fetchMLInsights = async () => {
  //   try {
  //     const res = await fetch(`${baseUrl}/ml_analysis`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Clerk-Session-Id": sessionId ?? "",
  //       },
  //     });
  //     const data = await res.json();
  //     setMlInsights(data);
  //   } catch (error) {
  //     console.error("Error fetching ML insights:", error);
  //   }
  // };

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!sessionId) return;
      const res = await fetch(`${baseUrl}/user_info`, {
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
          headers: {
            "Content-Type": "application/json",
            "X-Clerk-Session-Id": sessionId,
          },
        });
        const data = await res.json();
        if (data.analysis) setAnalysis(data.analysis);
        else setAnalysis(null);
      } catch (err) {
        console.error("Failed to fetch analysis:", err);
        setAnalysis(null);
      }
    };
    fetchAnalysis();
  }, [sessionId]);

  useEffect(() => {
    if (userInfo && userInfo?.tokens < 5) router.push("/plans");
  }, [router, userInfo]);

  useEffect(() => {
    if (analysis) setIsLoading(false);
  }, [analysis]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!analysis || Object.keys(analysis).length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        {userInfo?.tokens !== undefined && (
          <span>Token Balance: {userInfo?.tokens}</span>
        )}
        <br />
        No analysis available.
        <Link href="/docs" className="font-bold text-blue-600">
          {" "}
          Documentation
        </Link>
      </div>
    );
  }

  const topicData = Object.entries(analysis.topic_frequency || {}).map(
    ([name, value]) => ({ name, value })
  );
  const timelineData = Object.entries(
    analysis.message_volume_timeline || {}
  ).map(([date, value]) => ({ date, value }));

  return (
    <div className="relative max-w-7xl mx-auto py-16 px-6 text-gray-900">
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" />
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-14 animate-fadeIn">
        AI Chat Analysis
      </h1>

      <div className="flex justify-end mb-8">
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full shadow font-semibold text-sm flex items-center gap-2">
          🪙 Tokens Left:
          <span className="text-green-700 px-2 py-0.5 rounded-md">
            {userInfo.tokens}
          </span>
        </div>
      </div>

      {mlInsights && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">
            ML-Based Chat Clusters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(mlInsights.clusters).map(
              ([cluster, messages]: any, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-bold text-indigo-600 mb-3">
                    {cluster}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Top Keywords:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mlInsights.top_keywords[cluster].map(
                      (kw: string, i: number) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                        >
                          #{kw}
                        </span>
                      )
                    )}
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    {messages.slice(0, 5).map((msg: string, i: number) => (
                      <li key={i}>{msg}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="bg-white shadow-md p-6 rounded-xl text-lg leading-relaxed">
          {analysis.summary}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Sentiment Distribution</h2>
          <PieChart width={350} height={280}>
            <Pie
              dataKey="value"
              data={Object.entries(analysis.sentiment_counts || {}).map(
                ([name, value]) => ({ name, value })
              )}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {Object.entries(analysis.sentiment_counts || {}).map(
                (_, index) => (
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

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Topic Frequency</h2>
          <BarChart width={400} height={280} data={topicData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#6366F1" className="hover-none" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">
            Message Volume Over Time
          </h2>
          <LineChart width={700} height={300} data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8B5CF6" />
          </LineChart>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Keywords</h2>
        <div className="flex flex-wrap gap-3">
          {(analysis.keywords || []).map((kw: string, i: number) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
            >
              #{kw}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recommended Actions</h2>
        <ul className="list-disc list-inside space-y-2 bg-white p-5 rounded-xl shadow">
          {(analysis.recommended_actions || []).map(
            (action: string, i: number) => (
              <li key={i}>{action}</li>
            )
          )}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Insights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {(analysis.insights || []).map((insight: any, i: number) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-500"
            >
              <p className="font-bold text-lg">{insight.label}</p>
              <p className="text-sm text-gray-700">Type: {insight.type}</p>
              <p className="text-sm text-gray-700">
                Sentiment: {insight.sentiment}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        {/* <button
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition duration-300"
          onClick={fetchMLInsights}
        >
          🔍 Generate More Insight
        </button> */}
      </div>
    </div>
  );
}
