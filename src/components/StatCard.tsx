"use client";
import { useContext } from "react";
import { useState } from "react";
import ReportButton from "./ReportButton";
import { ColorModeContext } from "@/app/page";

export default function StatCard() {
  const [selected, setSelected] = useState<number>(0);
  const { darkMode } = useContext(ColorModeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-black max-xl:text-black" : "bg-white"
      } py-4 shadow-lg px-2.5 flex my-7 m-2.5 justify-around`}
    >
      <div className="flex flex-col gap-5 w-full">
        <div className="day-buttons flex">
          {[3, 7, 10, 30].map((value, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                key={`${value} days`}
                className={`${
                  selected === index
                    ? "bg-red-100 text-[#ff0000] border-[#ff0000]"
                    : "bg-white border-red-400 hover:bg-red-100 hover:text-[#ff0000] transition-all duration-100 ease-in"
                } text-sm font-semibold border-2 rounded px-2.5 py-1.5`}
              >
                {`${value} Days`}
              </button>
            );
          })}
        </div>

        <div className="xl:hidden grid gap-3.5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <TinyBadge
            icon={<span className="text-rose-500">🧾</span>}
            label="Purchases"
            value="0 | 0.00 INR"
          />
          <TinyBadge
            icon={<span className="text-indigo-500">📦</span>}
            label="Redemptions"
            value="0 | 0.00 INR"
          />
          <TinyBadge
            icon={<span className="text-orange-500">⛔</span>}
            label="Rej. Transactions"
            value="0 | 0.00 INR"
          />
          <TinyBadge
            icon={<span className="text-pink-500">🤝</span>}
            label="SIP Rejections"
            value="0 | 0.00 INR"
          />
          <TinyBadge
            icon={<span className="text-sky-500">📈</span>}
            label="New SIP"
            value="0 | 0.00 INR"
          />
        </div>

        <div className="flex pt-3 justify-center gap-4 max-xl:hidden">
          <Card heading="0 Purchase" icon={<span className="">🧾</span>} />
          <div className="border-l-2 border-gray-500"></div>
          <Card
            heading="0 Redemptions"
            icon={<span className="text-indigo-500">📦</span>}
          />
          <div className="border-l-2 border-gray-500"></div>
          <Card
            heading="0 Rej. Transactions"
            icon={<span className="text-orange-500">⛔</span>}
          />
          <div className="border-l-2 border-gray-500"></div>
        </div>
      </div>

      <div className="flex gap-4 max-xl:mt-10 max-xl:hidden">
        <div className="flex flex-col justify-end items-end gap-9">
          <ReportButton />
          <Card
            heading="0 SIP Rejection"
            icon={<span className="text-pink-500">🤝</span>}
          />
        </div>
        <div className="border-l-2 border-gray-500"></div>
        <div className="flex flex-col justify-end items-end gap-9">
          <ReportButton />
          <Card
            heading="0 New SIP"
            icon={<span className="text-sky-500">📈</span>}
          />
        </div>
      </div>
    </div>
  );
}

const TinyBadge = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: any;
  value: any;
}) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-gray-500 text-xs">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  </div>
);

function Card({ heading, icon }: { heading: string; icon: React.ReactNode }) {
  return (
    <div className="flex px-2 w-[250px] gap-2">
      <div className="w-[100px] text-6xl">{icon}</div>
      <div className="flex flex-col gap-2">
        <p>{heading}</p>
        <hr />
        <p>0.00 INR</p>
      </div>
    </div>
  );
}
