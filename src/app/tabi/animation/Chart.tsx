"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import Image from "next/image";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#38bdf8" }, // sky-400
  { browser: "safari", visitors: 200, fill: "#8b5cf6" }, // violet-500
  { browser: "firefox", visitors: 287, fill: "#ec4899" }, // pink-500
  { browser: "edge", visitors: 173, fill: "#f59e0b" }, // amber-500
  { browser: "other", visitors: 190, fill: "#10b981" }, // emerald-500
];

// const chartConfig = {
//   visitors: { label: "Visitors" },
// } satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="w-full bg-transparent shadow-none border-none rounded-xl p-0">
      <CardHeader className="items-center pb-0 p-0" />
      <CardContent className="relative flex items-center justify-center min-h-[80px]  md:min-h-[100px] lg:min-h-[180px] bg-transparent p-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="!w-[80px] sm:!w-[100px] md:!w-[140px] lg:!w-[160px] !h-[80px] sm:!h-[100px] md:!h-[140px] lg:!h-[160px]"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius="50%"
              strokeWidth={2}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Logo */}
        <Image
          src="/logo_new.png"
          alt="Center Logo"
          className="absolute left-1/2 top-1/2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </CardContent>
    </Card>
  );
}
