"use client";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { createContext, useEffect, useState, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import {
  FaLightbulb,
  FaFilter,
  FaCog,
  FaBell,
  FaStar,
  FaUserFriends,
  FaSearch,
  FaLock,
  FaGraduationCap,
  FaMoneyBill,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { Bar, Line, Bubble } from "react-chartjs-2";
import Navbar from "@/components/Navbar";
import MainCard from "@/components/MainCard";
import StatCard from "@/components/StatCard";
import Chart from "@/components/Chart";

export const ColorModeContext: React.Context<any> = createContext<any>("");

export default function Home() {
  const canvasRef = useRef<any>(null);

  const handleDownloadPDF = async () => {
    const element = canvasRef.current;
    if (!element) return;
  
    try {
      const imgData = await toPng(element, { cacheBust: true });
  
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
  
      const imgWidth = pdfWidth;
      const imgHeight = (elementHeight * pdfWidth) / elementWidth;
  
      let heightLeft = imgHeight;
      let position = 0;
  
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
  
      while (heightLeft > 0) {
        position = position - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
  
      pdf.save("layout.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/data");
      const data = await response.json();
      setData(data);
    } catch (error) {
      alert("some error occured");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sipBusinessOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" as const } },
    scales: data
      ? {
          ...data.sipBusinessOpts.scales,
        }
      : null,
  };

  const monthlyOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const } },
    scales: data
      ? {
          ...data.monthlyOpts.scales,
        }
      : null,
  };

  const bubbleOpts = {
    scales: data
      ? {
          ...data.bubbleOpts.scales,
        }
      : null,
    plugins: {
      legend: { position: "bottom" as const },
    },
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ColorModeContext.Provider value={{ darkMode }}>
      <button
        className="absolute top-[90%] left-[85%] px-8 h-11 rounded-3xl text-white bg-[#ff0000]"
        onClick={() => handleDownloadPDF()}
      >
        SAVE LAYOUT
      </button>
      <div
        className={`w-[100vw] h-[100vh] ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
        } overflow-x-hidden`}
        ref={canvasRef}
      >
        <nav
          className={`${
            darkMode ? "bg-black" : "bg-white"
          } shadow-md rounded-t-lg mt-2.5 mx-2.5 p-2.5 flex items-center justify-between`}
        >
          <div className="flex items-center gap-2">WEALTH ELITE</div>

          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 lg:w-1/3 max-lg:w-1/2">
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-transparent outline-none flex-1 px-2 text-sm"
            />
            <FaSearch className="text-gray-500" />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="max-lg:hidden flex items-center gap-4 text-gray-600 text-lg">
            <FaFilter className="cursor-pointer hover:text-blue-500" />
            <FaLightbulb className="cursor-pointer hover:text-blue-500" />
            <FaCog className="cursor-pointer hover:text-blue-500" />
            <FaBell className="cursor-pointer hover:text-blue-500" />
            <FaStar className="cursor-pointer hover:text-blue-500" />
            <FaUserFriends className="cursor-pointer hover:text-blue-500" />
            <FaSearch className="cursor-pointer hover:text-blue-500" />
            <FaLock className="cursor-pointer hover:text-blue-500" />
            <FaGraduationCap className="cursor-pointer hover:text-blue-500" />
            <FaMoneyBill className="cursor-pointer hover:text-blue-500" />

            <button className="flex items-center gap-1 text-gray-700 hover:text-red-500 text-sm font-medium">
              <FaSignOutAlt /> Logout
            </button>
          </div>
          <button className="lg:hidden flex items-center gap-1 text-gray-700 hover:text-red-500 text-sm font-medium">
            <FaSignOutAlt /> Logout
          </button>
        </nav>

        <Navbar />

        <div
          className={`w-full mt-4 grid md:grid-cols-1 lg:grid-cols-2 gap-3 px-2.5 ${
            darkMode ? "text-white" : ""
          }`}
        >
          <MainCard MainHeading="AUM 12.19 Cr" SubHeading="+0.77% MoM" />
          <MainCard MainHeading="SIP 1.39 Lakh" SubHeading="+0% MoM" />
        </div>

        <StatCard />

        {data && (
          <div className="w-full px-2.5 grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Chart
              heading="CLIENTS"
              buttonText="Download Report"
              chart={<Bubble data={data.bubbleData} options={bubbleOpts} />}
            />
            <Chart
              heading="SIP BUISNESS CHART"
              buttonText="View Report"
              chart={
                <Bar data={data.sipBusinessData} options={sipBusinessOpts} />
              }
            />
            <Chart
              heading="MONTHLY MIS"
              buttonText="View Report"
              chart={<Line data={data.monthlyData} options={monthlyOpts} />}
            />
          </div>
        )}
      </div>
    </ColorModeContext.Provider>
  );
}
