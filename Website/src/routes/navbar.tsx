import React from "react";
import { NavLink, useLocation } from "react-router";

import { MdSpaceDashboard } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { useState, useRef,useLayoutEffect } from "react";

const buttonStyle =
  "w-full flex justify-start items-center gap-5 p-3 px-5 cursor-pointer text-white hover:bg-gray-700";
const buttonIconStyle = "text-xl font-bold";
const buttonIconStyleActive = "text-xl font-bold text-blue-200";
const buttonTextStyle = "text-lg font-medium";
const buttonTextStyleActive = "text-lg font-bold text-blue-200";
const buttonArrowStyle = "ml-auto text-2xl transition-transform";
const subButtonStyle =
  "w-full flex justify-start items-center gap-3 p-3 px-8 cursor-pointer !text-white !no-underline hover:bg-gray-700";
const subButtonIconStyle = "text-xl font-bold";
const subButtonTextStyle = "text-base font-medium";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  const [, forceUpdate] = useState(0);
  const lists = useRef({
    invoice: false,
    estimate: false,
    product: false,
    client: false,
  });

  const toggleLists = (key) => {
    lists.current[key] = !lists.current[key];
    forceUpdate((n) => n + 1);
};

useLayoutEffect(() => {
    if (pathname === "/") {
        lists.current = {
            invoice: false,
            estimate: false,
            product: false,
            client: false,
        };
        forceUpdate((n) => n + 1);
        return
    }
    if (pathname.includes("/invoice")) {
        lists.current = {
            invoice: true,
            estimate: false,
            product: false,
            client: false,
        };
        forceUpdate((n) => n + 1);
        return
    }
  }, [pathname]);

  return (
    <nav className="w-full flex flex-col justify-start items-center border-t-2 border-gray-300 py-3">
      <NavLink to="/" className="text-4xl text-blue-700 font-bold p-5">
        Efacture
      </NavLink>
      <NavLink to="/" className={buttonStyle}>
        {({ isActive }) => (
          <>
            <MdSpaceDashboard
              className={isActive ? buttonIconStyleActive : buttonIconStyle}
            />
            <h1 className={isActive ? buttonTextStyleActive : buttonTextStyle}>
              Dashboard
            </h1>
          </>
        )}
      </NavLink>

      <div className="w-full flex flex-col select-none">
        <div className={buttonStyle} onClick={() => toggleLists("invoice")}>
          <FaRegFileAlt className={buttonIconStyle} />
          <h6 className={buttonTextStyle}>Invoices</h6>
          <MdKeyboardArrowDown
            className={`${buttonArrowStyle} ${
              lists.current.invoice && "rotate-180"
            }`}
          />
        </div>

        {lists.current.invoice && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${subButtonStyle} bg-gray-700` : subButtonStyle
              }
              to="/invoices/new"
              end
            >
              <FaRegFileAlt className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>New Invoice</h6>
            </NavLink>
            <NavLink className={subButtonStyle} to="/invoices">
              <FaRegFileAlt className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>Invoices List</h6>
            </NavLink>
            <NavLink className={subButtonStyle} to="/invoices/templates">
              <FaRegFileAlt className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>Invoices Templates</h6>
            </NavLink>
          </>
        )}
      </div>

      <div className={"w-full flex flex-col select-none"}>
        <div onClick={() => toggleLists("estimate")} className={buttonStyle}>
          <FaRegFile className={buttonIconStyle} />
          <h6 className={buttonTextStyle}>Estimate</h6>
          <MdKeyboardArrowDown
            className={`${buttonArrowStyle} ${
              lists.current.estimate && "rotate-180"
            }`}
          />
        </div>
        {lists.current.estimate && (
          <>
            <NavLink className={subButtonStyle} to="#">
              <FaRegFile className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>New Estimate</h6>
            </NavLink>
            <NavLink className={subButtonStyle} to="#">
              <FaRegFile className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>Estimates List</h6>
            </NavLink>
            <NavLink className={subButtonStyle} to="#">
              <FaRegFile className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>Estimates Templates</h6>
            </NavLink>
          </>
        )}
      </div>
      {/* 
      <div
        className="w-full flex flex-col select-none"
        onClick={() => toggleAccordion("items")}
      >
        <div className={buttonStyle}>
          <FaBox className={buttonIconStyle} />
          <h6 className={buttonTextStyle}>Products</h6>
          <MdKeyboardArrowDown
            className={`${buttonArrowStyle}  ${
              accordionState.current.items && "rotate-180"
            }`}
          />
        </div>
        {accordionState.current.items && (
          <>
            <NavLink className={subButtonStyle} to="#">
              <FaBox className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>New Product</h6>
            </NavLink>
            <NavLink className={subButtonStyle} to="#">
              <FaBox className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>Products List</h6>
            </NavLink>
          </>
        )}
      </div>
      <div
        className="w-full flex flex-col select-none"
        onClick={() => toggleAccordion("clients")}
      >
        <div className={buttonStyle}>
          <FaUsers className={buttonIconStyle} />
          <h6 className={buttonTextStyle}>Clients</h6>
          <MdKeyboardArrowDown
            className={`${buttonArrowStyle} ${
              accordionState.current.clients && "rotate-180"
            }`}
          />
        </div>
        {accordionState.current.clients && (
          <>
            <NavLink className={subButtonStyle} to="#">
              <FaUsers className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>New Client</h6>
            </NavLink>
            <NavLink className={subButtonStyle} to="#">
              <FaUsers className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>Clients List</h6>
            </NavLink>
          </>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
