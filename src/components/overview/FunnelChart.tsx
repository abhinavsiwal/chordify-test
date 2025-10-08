"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const FunnelChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const chart = echarts.init(containerRef.current);

    const categories = [
      "Installs",
      "Registration",
      "Verification",
      "FTD",
    ];

    const option: echarts.EChartsOption = {
      tooltip: { trigger: "axis" },
      legend: { data: ["Clicks", "Previous Year Clicks"], top: 0, right: 0 },
      grid: { left: 40, right: 20, top: 40, bottom: 40, containLabel: true },
      xAxis: [
        {
          type: "category",
          data: categories,
          axisTick: { alignWithLabel: true },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Clicks",
          axisLabel: {
            formatter: (value: number) => `${Math.round(value / 1000)}k`,
          },
        },
      ],
      series: [
        {
          name: "Clicks",
          type: "bar",
          barWidth: 60,
          itemStyle: { color: "#f59e0b" },
          data: [7940, 4870, 3960, 1790],
        },
        {
          name: "Previous Year Clicks",
          type: "bar",
          barWidth: 60,
          itemStyle: { color: "#fbbf24" },
          data: [8100, 5370, 4140, 2030],
        },
      ],
    };

    chart.setOption(option);

    const resize = () => chart.resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      chart.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[280px]" />;
};

export default FunnelChart;


