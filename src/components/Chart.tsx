"use client";

import { useContext } from "react";
import { ColorModeContext } from "@/app/page";

export default function Chart({
  heading,
  buttonText,
  chart,
}: {
  chart: React.ReactNode;
  heading: string;
  buttonText: string;
}) {
  const { darkMode } = useContext(ColorModeContext);
  return (
    <div className={`w-full ${darkMode ? "bg-black" : "bg-white"} shadow-lg`}>
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">{heading}</h1>
        <button className="bg-red-100 border-2 rounded border-[#ff0000] text-sm font-semibold text-[#ff0000] px-2 py-1">
          {buttonText}
        </button>
      </div>
      <hr />
      <div className="h-80 p-2.5">{chart}</div>
    </div>
  );
}
