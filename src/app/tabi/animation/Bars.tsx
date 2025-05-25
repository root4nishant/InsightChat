"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6", // blue-500
  },
  mobile: {
    label: "Mobile",
    color: "#9333ea", // purple-600
  },
} satisfies ChartConfig;

export function Bars() {
  return (
    <Card className="w-full p-0 bg-transparent shadow-none border-none rounded-xl">
      <CardHeader className="pb-0" />
      <CardContent className="bg-transparent p-0">
        <ChartContainer config={chartConfig} className="bg-transparent">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="#3b82f6" radius={4} />
            <Bar dataKey="mobile" fill="#9333ea" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
