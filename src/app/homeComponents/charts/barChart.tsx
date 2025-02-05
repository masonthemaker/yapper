"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 187, fill: "#00A3FF" },
  { browser: "safari", visitors: 200, fill: "#FF4D8F" },
  { browser: "firefox", visitors: 275, fill: "#9747FF" },
  { browser: "edge", visitors: 173, fill: "#00FF94" },
  { browser: "other", visitors: 90, fill: "#FFD600" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#00A3FF",
  },
  safari: {
    label: "Safari",
    color: "#FF4D8F",
  },
  firefox: {
    label: "Firefox",
    color: "#9747FF",
  },
  edge: {
    label: "Edge",
    color: "#00FF94",
  },
  other: {
    label: "Other",
    color: "#FFD600",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card className="bg-transparent border-0 hover:border-0 hover:shadow-none">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} stroke="transparent" />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent 
                  hideLabel 
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-white [&_*]:text-white"
                />
              }
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]"
              fill="rgba(255, 255, 255, 0.1)"
              style={{ backdropFilter: "blur(10px)" }}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.2}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                    style={{ backdropFilter: "blur(10px)" }}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
