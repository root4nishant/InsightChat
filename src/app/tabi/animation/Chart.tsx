"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#38bdf8" }, // sky-400
  { browser: "safari", visitors: 200, fill: "#8b5cf6" }, // violet-500
  { browser: "firefox", visitors: 287, fill: "#ec4899" }, // pink-500
  { browser: "edge", visitors: 173, fill: "#f59e0b" }, // amber-500
  { browser: "other", visitors: 190, fill: "#10b981" }, // emerald-500
];

const chartConfig = {
  visitors: { label: "Visitors" },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="w-full bg-transparent shadow-none border-none rounded-xl p-0">
      <CardHeader className="items-center pb-0 p-0" />
      <CardContent className="relative flex-1 pb-0 bg-transparent p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto p-0 lg:w-[160px] lg:h-[160px] md:w-[120px] md:h-[120px] w-[80px] h-[80px] bg-transparent"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={40}
              strokeWidth={2}
            />
          </PieChart>
        </ChartContainer>

        <img
          src="/logo_new.png"
          alt="Center Logo"
          className="absolute left-1/2 top-1/2 lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </CardContent>
    </Card>
  );
}
