"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SpendOrdersChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const chartInstance = echarts.init(containerRef.current);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: { color: "#999" },
        },
      },
  
      legend: {
        data: [
          "Spend",
          "Previous Year Spend",
          "Orders",
          "Previous Year Orders",
        ],
      },
      xAxis: [
        {
          type: "category",
          data: [
            "5/23/24",
            "6/1/24",
            "6/7/24",
            "6/14/24",
            "6/21/24",
            "6/28/24",
          ],
          axisPointer: { type: "shadow" },
        },
      ],
      yAxis: [
        {
          type: "value",
     
          axisLabel: {
            formatter: (value: number) => `$${Math.round(value / 1000)}k`,
          },
          splitLine: { show: true },
        },
        {
          type: "value",
        
          axisLabel: {
            formatter: (value: number) => `${value}`,
          },
          splitLine: { show: false },
        },
      ],
      series: [
        {
          name: "Spend",
          type: "bar",
          emphasis: { focus: "series" },
          itemStyle: { color: "#1d87f5" },
          tooltip: {
            valueFormatter: (value) => `$${Number(value).toLocaleString()}`,
          },
          data: [180000, 220000, 260000, 300000, 340000, 380000],
        },
        {
          name: "Previous Year Spend",
          type: "bar",
          emphasis: { focus: "series" },
          itemStyle: { color: "#93c5fd" },
          tooltip: {
            valueFormatter: (value) => `$${Number(value).toLocaleString()}`,
          },
          data: [150000, 200000, 210000, 240000, 280000, 320000],
        },
        {
          name: "Orders",
          type: "line",
          yAxisIndex: 1,
          smooth: true,
          symbol: "circle",
          symbolSize: 8,
          lineStyle: { color: "#111827", width: 2 },
          itemStyle: { color: "#111827" },
          tooltip: {
            valueFormatter: (value) => `${Number(value).toLocaleString()}`,
          },
          data: [200, 240, 300, 420, 520, 600],
        },
        {
          name: "Previous Year Orders",
          type: "line",
          yAxisIndex: 1,
          smooth: true,
          symbol: "circle",
          symbolSize: 8,
          lineStyle: { color: "#6b7280", width: 2 },
          itemStyle: { color: "#6b7280" },
          tooltip: {
            valueFormatter: (value) => `${Number(value).toLocaleString()}`,
          },
          data: [180, 220, 250, 380, 450, 520],
        },
      ],
      grid: { left: 40, right: 40, top: 50, bottom: 40, containLabel: true },
    };

    chartInstance.setOption(option);

    const resizeObserver = new ResizeObserver(() => {
      chartInstance.resize();
    });
    resizeObserver.observe(containerRef.current);

    const resizeListener = () => chartInstance.resize();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      resizeObserver.disconnect();
      chartInstance.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[360px]" />;
};

export default SpendOrdersChart;