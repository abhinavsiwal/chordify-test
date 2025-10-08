"use client";

import Image from "next/image";
import { DateRangePicker } from "@/components/ui/data-range-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardCard from "@/components/common/DashboardCard";
import { ChartNoAxesColumnDecreasing,Minus } from 'lucide-react';


export default function Home() {
  return (
    <div className="w-full bg-gray-100 flex flex-col gap-4 mt-16 p-4">
      <div className="flex flex-col gap-2">

      <h3 className="text-black text-3xl font-bold" >Overview</h3>
      <p className="text-sm text-gray-700 underline font-medium ">Last updated: 10/08/2025 10:00 AM</p>
      </div>

      <div className="w-full h-full rounded-xl p-6 border border-black py-12 flex flex-col gap-6">
        <h6 className="text-black text-2xl font-bold" >Overall Business Performance</h6>
        <div className="w-full flex items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 text-sm font-medium" >Date Range</p>
            <DateRangePicker
            onUpdate={(values) => console.log(values)}
            initialDateFrom="2025-01-01"
            initialDateTo="2025-12-31" 
            align="start"
            locale="en-GB"
            showCompare={false}
          
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 text-sm font-medium" >Compare</p>
         <Select >
          <SelectTrigger>
            <SelectValue placeholder="Year Over Year" />
            <SelectContent>
              <SelectItem value="1">Year Over Year</SelectItem>
              <SelectItem value="2">Quarter Over Quarter</SelectItem>
              <SelectItem value="3">Month Over Month</SelectItem>
            </SelectContent>
          </SelectTrigger>
         </Select>
          </div>
    
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          <DashboardCard title="Spend" value="$1.4M" vs="$1.2M (+10.1%)" />
          <DashboardCard title="Impressions" value="2.19M" vs="2.01M (+9.1%)" />
          <DashboardCard title="Clicks" value="$45.21" vs="$40.21 (+10%)" />  
          <DashboardCard title="Orders" value="904k" vs="804k (+10%)" />
          <DashboardCard title="CPA" value="$52.32" vs="$50.21 (+10%)" />
          <DashboardCard title="ROAS" value="3.01" vs="2.81 (+10%)" />
        </div>
        <div className="w-full border border-gray-300 p-4 rounded-xl flex flex-col gap-4">
          <h6 className="text-black text-xl font-bold" >Spend vs Orders</h6>
          <div className="w-full flex gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <Select >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Spend" />
                  <SelectContent>
                    <SelectItem value="1">Spend</SelectItem>
                    <SelectItem value="2">Orders</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Orders" />
                  <SelectContent>
                    <SelectItem value="1">Spend</SelectItem>
                    <SelectItem value="2">Orders</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex items-center gap-6 ">
              <div className="flex gap-2 items-center">
                <ChartNoAxesColumnDecreasing className="w-4 h-4 text-primary" strokeWidth={4} />
                <p className="text-gray-700 text-sm font-bold" >Spend</p>
              </div>
              <div className="flex gap-2 items-center">
                <ChartNoAxesColumnDecreasing className="w-4 h-4 text-blue-400" strokeWidth={4} />
                <p className="text-gray-700 text-sm font-bold" >Previous Year Spend</p>
              </div>
              <div className="flex gap-2 items-center">
                <Minus className="w-6 h-6 text-black" strokeWidth={8} />
                <p className="text-gray-700 text-sm font-bold" >Orders</p>
              </div>
              <div className="flex gap-2 items-center">
                <Minus className="w-6 h-6 text-gray-500" strokeWidth={8} />
                <p className="text-gray-700 text-sm font-bold" >Previous Year Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
   
    </div>
  );
}
