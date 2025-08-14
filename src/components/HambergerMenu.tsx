"use client";
import { useState } from "react";
import { useContext } from "react";
import { ColorModeContext } from "@/app/page";

const HamburgerMenu = () => {
  const { darkMode } = useContext(ColorModeContext);

  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className="md:hidden relative"
      style={{
        zIndex: "1",
      }}
    >
      <div
        className="hamburger"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {show && (
        <nav
          className={`${
            darkMode ? "text-black" : ""
          } absolute bg-white rounded mt-3.5 p-3.5 border`}
        >
          <ul className="flex flex-col gap-2">
            <li
              onClick={() => {
                setShow(false);
              }}
            >
              HOME
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
            >
              CRM
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
            >
              UTILITIES
            </li>
            <select id="insuarance" className="select-box" defaultValue="">
              <option value="" disabled hidden>
                INSURANCE
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option1"
              >
                option1
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option2"
              >
                option2
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option3"
              >
                option3
              </option>
            </select>
            <select id="others" className="select-box" defaultValue="">
              <option value="" disabled hidden>
                ASSETS
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option1"
              >
                option1
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option2"
              >
                option2
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option3"
              >
                option3
              </option>
            </select>
            <li
              onClick={() => {
                setShow(false);
              }}
            >
              MUTUAL
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
            >
              RESEARCH
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
              className="truncate"
            >
              TRANSACT ONLINE
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
              className="truncate"
            >
              GOAL GPS
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
              className="truncate"
            >
              FINANCIAL PLANNING
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
              className="truncate"
            >
              WEALTH REPORTS
            </li>
            <select id="others" className="select-box" defaultValue="">
              <option value="" disabled hidden>
                OTHERS
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option1"
              >
                option1
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option2"
              >
                option2
              </option>
              <option
                onClick={() => {
                  setShow(false);
                }}
                value="option3"
              >
                option3
              </option>
            </select>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
