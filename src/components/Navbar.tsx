"use client";
import HamburgerMenu from "./HambergerMenu";
export default function Navbar() {
  return (
    <div className="mx-2.5 max-md:p-2.5 bg-[#ff0000]">
      <HamburgerMenu />
      <ul className="flex xl:text-lg lg:text-sm md:text-xs max-md:hidden text-white p-2.5 items-center justify-around">
        <li>HOME</li>
        <li>CRM</li>
        <li>UTILITIES</li>
        <select id="insuarance" className="select-box" defaultValue="">
          <option value="" disabled hidden>
            INSURANCE
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
        <select id="others" className="select-box" defaultValue="">
          <option value="" disabled hidden>
            ASSETS
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
        <li>MUTUAL</li>
        <li>RESEARCH</li>
        <li className="truncate">TRANSACT ONLINE</li>
        <li className="truncate">GOAL GPS</li>
        <li className="truncate">FINANCIAL PLANNING</li>
        <li className="truncate">WEALTH REPORTS</li>
        <select id="others" className="select-box" defaultValue="">
          <option value="" disabled hidden>
            OTHERS
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
      </ul>
    </div>
  );
}
