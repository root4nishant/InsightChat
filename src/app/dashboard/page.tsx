/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Navbar from "@/components/custom/nav";
import { sendSessionIdToExtension } from "@/utils/sendSessionToExtension";
import { useAuth, UserButton } from "@clerk/nextjs";
import {
  Activity,
  BarChart3,
  Brain,
  Clock,
  Hash,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Spinner } from "./Loader";
import { useIsMobile } from "@/hooks/use-mobile";


const COLORS = ["#10B981", "#FBBF24", "#EF4444", "#8B5CF6", "#3B82F6"];

type StatCardColor = "blue" | "green" | "purple" | "orange" | "pink";
interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: number | string;
  subtitle?: string;
  color?: StatCardColor;
}

const StatCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  color = "blue",
}: StatCardProps) => {
  const colorClasses: Record<StatCardColor, string> = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    pink: "from-pink-500 to-pink-600",
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div
        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorClasses[color]} opacity-10 rounded-full transform translate-x-8 -translate-y-8`}
      ></div>
      <div className="p-6 relative">
        <div className="flex items-center justify-between mb-3">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            {subtitle && (
              <div className="text-sm text-gray-500">{subtitle}</div>
            )}
          </div>
        </div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>
    </div>
  );
};

const ChartCard = ({ title, icon: Icon, children, fullWidth = false }: any) => (
  <div
    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${
      fullWidth ? "col-span-full" : ""
    }`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </div>
);

const InsightCard = ({ insight, index }: any) => {
  const colors = [
    "border-purple-400",
    "border-blue-400",
    "border-green-400",
    "border-orange-400",
    "border-pink-400",
  ];
  const bgColors = [
    "bg-purple-50",
    "bg-blue-50",
    "bg-green-50",
    "bg-orange-50",
    "bg-pink-50",
  ];

  return (
    <div
      className={`${bgColors[index % bgColors.length]} border-l-4 ${
        colors[index % colors.length]
      } rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-white shadow-sm">
          <Lightbulb className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 mb-2">
            {insight.label}
          </h3>
          <div className="flex gap-4 text-sm">
            <span className="px-2 py-1 bg-white rounded-full text-gray-600 font-medium">
              {insight.type}
            </span>
            <span className="px-2 py-1 bg-white rounded-full text-gray-600 font-medium">
              {insight.sentiment}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [mlInsights] = useState<any>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [userInfo, setUserInfo] = useState<any>(null);

  const { sessionId, isSignedIn } = useAuth();
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;


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
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <Spinner />
          <p className="mt-4 text-gray-600 font-medium">
            Loading your insights...
          </p>
        </div>
      </div>
    );
  }
 
  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 via-indigo-100 to-pink-100 text-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l-3.75 3.75m0 0l3.75 3.75m-3.75-3.75h10.5"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Desktop View Only
          </h2>
          <p className="text-gray-600 mb-6">
            This dashboard is optimized for large screens. Please access it on a
            desktop or laptop for the best experience.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (!analysis || Object.keys(analysis).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            No Analysis Available
          </h2>
          <p className="text-gray-600 mb-4">
            Start analyzing your chats to see insights here.
          </p>
          {userInfo?.tokens !== undefined && (
            <div className="flex items-center justify-center gap-2 mb-4 p-3 bg-green-50 rounded-xl">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">
                Token Balance: {userInfo?.tokens}
              </span>
            </div>
          )}
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            View Documentation
          </Link>
        </div>
      </div>
    );
  }

  const topicData = Object.entries(analysis.topic_frequency || {}).map(
    ([name, value]) => ({ name, value })
  );
  const timelineData = Object.entries(
    analysis.message_volume_timeline || {}
  ).map(([date, value]) => ({ date, value }));

  const sentimentData = Object.entries(analysis.sentiment_counts || {}).map(
    ([name, value]) => ({ name, value })
  );

  const totalMessages = Object.values(analysis.sentiment_counts || {}).reduce(
    (a: any, b: any) => a + b,
    0
  );
  const totalTopics = Object.keys(analysis.topic_frequency || {}).length;

  return (
    <>
      <Navbar />
      <div className="min-h-screen mx-auto px-4 lg:px-20 pt-20 max-w-[1400px]">
        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 ">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-5">
          {/* Header */}
          <div className="text-center mb-12 flex flex-row justify-between items-center">
            <div className="inline-flex items-center gap-3 rounded-2xl py-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                AI Chat Analysis Dashboard
              </h1>
            </div>

            {/* Token Balance */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-3 rounded-2xl shadow-lg h-full">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">
                Tokens Remaining: {userInfo?.tokens || 0}
              </span>
              <UserButton />
            </div>
          </div>

          {/* ML Insights Section */}
          {mlInsights && (
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  ML-Based Chat Clusters
                </h2>
                <p className="text-gray-600">
                  Advanced machine learning insights from your conversations
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(mlInsights.clusters).map(
                  ([cluster, messages]: any, idx) => (
                    <div
                      key={idx}
                      className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {cluster}
                        </h3>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-600 mb-2">
                          Top Keywords:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {mlInsights.top_keywords[cluster].map(
                            (kw: string, i: number) => (
                              <span
                                key={i}
                                className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                              >
                                #{kw}
                              </span>
                            )
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {messages.slice(0, 5).map((msg: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700 p-2 bg-gray-50 rounded-lg"
                          >
                            <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span>{msg}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              icon={MessageSquare}
              title="Total Messages"
              value={totalMessages as number}
              color="blue"
            />
            <StatCard
              icon={Hash}
              title="Topics Identified"
              value={totalTopics}
              color="green"
            />
            <StatCard
              icon={TrendingUp}
              title="Keywords Found"
              value={analysis.keywords?.length || 0}
              color="purple"
            />
            <StatCard
              icon={Target}
              title="Action Items"
              value={analysis.recommended_actions?.length || 0}
              color="orange"
            />
          </div>

          {/* Summary Section */}
          <ChartCard title="Executive Summary" icon={Sparkles} fullWidth>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 text-lg leading-relaxed">
              <p className="text-gray-800">{analysis.summary}</p>
            </div>
          </ChartCard>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-8">
            <ChartCard title="Sentiment Distribution" icon={Activity}>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={sentimentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {sentimentData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>

            <ChartCard title="Topic Frequency" icon={BarChart3}>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topicData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill="url(#colorGradient)"
                      radius={[4, 4, 0, 0]}
                    />
                    <defs>
                      <linearGradient
                        id="colorGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </div>

          {/* Timeline Chart */}
          <ChartCard title="Message Volume Timeline" icon={Clock} fullWidth>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: "#8B5CF6", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Keywords Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                <Hash className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Keywords</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {(analysis.keywords || []).map((kw: string, i: number) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Recommended Actions
              </h2>
            </div>
            <div className="space-y-3">
              {(analysis.recommended_actions || []).map(
                (action: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300"
                  >
                    <div className="p-1 rounded-full bg-green-200 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-800 font-medium">{action}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Insights Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Key Insights
              </h2>
              <p className="text-gray-600">
                Actionable insights from your chat analysis
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {(analysis.insights || []).map((insight: any, i: number) => (
                <InsightCard key={i} insight={insight} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
