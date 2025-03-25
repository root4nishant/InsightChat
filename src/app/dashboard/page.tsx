/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { sendSessionIdToExtension } from "@/utils/sendSessionToExtension";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#10B981", "#FBBF24", "#EF4444"];

export default function DashboardPage() {
  const { sessionId, isSignedIn } = useAuth();
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    if (!isSignedIn || !sessionId) return;
    sendSessionIdToExtension(sessionId);
  }, [sessionId, isSignedIn]);

  useEffect(() => {
    const fetchAnalysis = async () => {
      if (!sessionId) return;
      try {
        const res = await fetch("http://127.0.0.1:8000/get_analysis", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Clerk-Session-Id": sessionId,
          },
        });
        const data = await res.json();
        if (data.analysis) {
          setAnalysis(data.analysis);
        } else {
          setAnalysis(null);
        }
      } catch (err) {
        console.error("❌ Failed to fetch analysis:", err);
        setAnalysis(null);
      }
    };
    fetchAnalysis();
  }, [sessionId]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">📊 AI Chat Analysis</h1>

      {!analysis && <p>Loading or no analysis found yet.</p>}

      {analysis && (
        <>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">🧠 Summary</h2>
            <p className="bg-white p-4 rounded shadow text-gray-700">
              {analysis.summary}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              📈 Sentiment Distribution
            </h2>
            <PieChart width={300} height={250}>
              <Pie
                dataKey="value"
                data={Object.entries(analysis.sentiment_counts).map(
                  ([key, value]) => ({
                    name: key,
                    value,
                  })
                )}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {Object.entries(analysis.sentiment_counts).map(
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
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">🏷️ Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {analysis.keywords.map((kw: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              ✅ Recommended Actions
            </h2>
            <ul className="list-disc list-inside">
              {analysis.recommended_actions.map((action: string, i: number) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">🔍 Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analysis.insights.map((insight: any, i: number) => (
                <div key={i} className="border p-4 rounded shadow bg-white">
                  <p>
                    <strong>Label:</strong> {insight.label}
                  </p>
                  <p>
                    <strong>Type:</strong> {insight.type}
                  </p>
                  <p>
                    <strong>Sentiment:</strong> {insight.sentiment}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6">
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              More Insight 🔮
            </button>
          </div>
        </>
      )}
    </div>
  );
}
