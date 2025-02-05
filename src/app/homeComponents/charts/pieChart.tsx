"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { name: "John", calls: 45, fill: "#00A3FF" },
  { name: "Sarah", calls: 38, fill: "#FF4D8F" },
  { name: "Mike", calls: 52, fill: "#9747FF" },
  { name: "Lisa", calls: 33, fill: "#00FF94" },
  { name: "David", calls: 41, fill: "#FFD600" },
]

const chartConfig = {
  calls: {
    label: "Calls",
  },
  John: {
    label: "John",
    color: "#00A3FF",
  },
  Sarah: {
    label: "Sarah",
    color: "#FF4D8F",
  },
  Mike: {
    label: "Mike",
    color: "#9747FF",
  },
  Lisa: {
    label: "Lisa",
    color: "#00FF94",
  },
  David: {
    label: "David",
    color: "#FFD600",
  },
} satisfies ChartConfig

export function Component() {
  const totalCalls = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.calls, 0)
  }, [])

  return (
    <Card className="flex flex-col bg-transparent border-0 outline-none hover:outline-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent 
                  hideLabel 
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-white [&_*]:text-white"
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="calls"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl font-bold"
                        >
                          {totalCalls.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-white"
                        >
                          Calls
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none text-sky-300">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-white">
          Showing total calls for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
