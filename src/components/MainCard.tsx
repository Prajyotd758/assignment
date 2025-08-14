import { BsTriangleFill } from "react-icons/bs";
import { useContext } from "react";
import ReportButton from "./ReportButton";
import { ColorModeContext } from "@/app/page";

export default function MainCard({
  MainHeading,
  SubHeading,
}: {
  MainHeading: string;
  SubHeading: string;
}) {
  const { darkMode } = useContext(ColorModeContext);

  return (
    <div
      className={`relative py-6 ${
        darkMode ? "bg-black" : "bg-white"
      } rounded shadow-lg w-full flex items-center max-sm:items-start flex-col max-sm:px-20`}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h4 className="font-semibold">Current</h4>
        <h1 className="text-3xl font-semibold">{MainHeading}</h1>
        <h4 className="flex items-center gap-1.5">
          <BsTriangleFill color="rgb(0, 188, 0)" /> {SubHeading}
        </h4>
      </div>
      <div className="absolute flex flex-col left-[80%] max-sm:left-[70%] gap-10">
        <ReportButton />
        <select
          name=""
          id="trend"
          defaultValue=""
          className="text-green-600 font-bold"
        >
          <option value="" disabled hidden>
            View Trend
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
      </div>
    </div>
  );
}
