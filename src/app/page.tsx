import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-gray-100 flex flex-col gap-4 mt-8">
      <div className="flex flex-col gap-2">

      <h3 className="text-black text-3xl font-bold" >Overview</h3>
      <p className="text-sm text-gray-700 underline font-medium ">Last updated: 10/08/2025 10:00 AM</p>
      </div>

      <div className="w-full h-full rounded-xl p-6 border border-black py-12">
        <h6 className="text-black text-2xl font-bold" >Overall Business Performance</h6>
      </div>
   
    </div>
  );
}
