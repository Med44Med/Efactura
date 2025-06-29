import React from "react";
import { NavLink, useLocation } from "react-router";

import { MdSpaceDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { useState, useRef, useLayoutEffect } from "react";
import InvoiceLink from "./groupedLink/invoiceLink";
import EstimateLink from "./groupedLink/estimateLink";
import ItemsList from "./groupedLink/itemsList";
import ClientsList from './groupedLink/clientList';
import logo from "../../assets/logo.svg";

const buttonStyle ="group w-full flex justify-start items-center gap-5 p-3 px-5 cursor-pointer text-text hover:bg-blue-50";
const buttonIconStyle = "text-xl font-bold group-hover:text-primary";
const buttonIconStyleActive = "text-xl font-bold text-primary group-hover:text-primary";
const buttonTextStyle = "text-lg font-medium text-text-secondary group-hover:text-primary";
const buttonTextStyleActive = "text-lg font-bold text-primary";

const Navbar = () => {
  const { pathname } = useLocation<{pathname:string}>();

  const [, forceUpdate] = useState<number>(0);
  const lists = useRef({
    invoice: false,
    estimate: false,
    item: false,
    client: false,
  });

  const toggleLists = (key) => {
    lists.current[key] = !lists.current[key];
    forceUpdate((n) => n + 1);
  };

  useLayoutEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/company" ||
      pathname === "/profile" ||
      pathname === "/settings"
    ) {
      lists.current = {
        invoice: false,
        estimate: false,
        item: false,
        client: false,
      };
      forceUpdate((n) => n + 1);
      return;
    }
    if (pathname.includes("invoice")) {
      lists.current = {
        invoice: true,
        estimate: false,
        item: false,
        client: false,
      };
      forceUpdate((n) => n + 1);
      return;
    }
    if (pathname.includes("estimate")) {
      lists.current = {
        invoice: false,
        estimate: true,
        item: false,
        client: false,
      };
      forceUpdate((n) => n + 1);
      return;
    }
    if (pathname.includes("item")) {
      lists.current = {
        invoice: false,
        estimate: false,
        item: true,
        client: false,
      };
      forceUpdate((n) => n + 1);
      return;
    }
    if (pathname.includes("client")) {
      lists.current = {
        invoice: false,
        estimate: false,
        item: false,
        client: true,
      };
      forceUpdate((n) => n + 1);
      return;
    }
  }, [pathname]);

  return (
    <nav className="w-full flex flex-col justify-start items-center border-t-2 border-blue-100 py-3">
      <NavLink to="/" className="w-full flex justify-start items-center gap-3 p-5">
        <img src={logo} alt="logo" className='h-8 w-8'/>
        <h1 className="text-2xl text-primary font-bold ">µFacture</h1>
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
      <InvoiceLink show={lists.current.invoice} toggle={toggleLists} />
      <EstimateLink show={lists.current.estimate} toggle={toggleLists} />
      <ItemsList show={lists.current.item} toggle={toggleLists} />
      <ClientsList show={lists.current.client} toggle={toggleLists} />
      <NavLink to="/company" className={buttonStyle}>
        {({ isActive }) => (
          <>
            <FaHome
              className={isActive ? buttonIconStyleActive : buttonIconStyle}
            />
            <h1 className={isActive ? buttonTextStyleActive : buttonTextStyle}>
              Company
            </h1>
          </>
        )}
      </NavLink>
      <NavLink to="/profile" className={buttonStyle}>
        {({ isActive }) => (
          <>
            <FaUser
              className={isActive ? buttonIconStyleActive : buttonIconStyle}
            />
            <h1 className={isActive ? buttonTextStyleActive : buttonTextStyle}>
              Profile
            </h1>
          </>
        )}
      </NavLink>
      <NavLink to="/settings" className={buttonStyle}>
        {({ isActive }) => (
          <>
            <IoSettingsSharp
              className={isActive ? buttonIconStyleActive : buttonIconStyle}
            />
            <h1 className={isActive ? buttonTextStyleActive : buttonTextStyle}>
              Settings
            </h1>
          </>
        )}
      </NavLink>
      {/* 
      <div
        className="w-full flex flex-col select-none"
        onClick={() => toggleAccordion("items")}
      >
        <div className={buttonStyle}>
          <FaBox className={buttonIconStyle} />
          <h6 className={buttonTextStyle}>items</h6>
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
              <h6 className={subButtonTextStyle}>New item</h6>
            </NavLink>
            <NavLink className={subButtonStyle} to="#">
              <FaBox className={subButtonIconStyle} />
              <h6 className={subButtonTextStyle}>items List</h6>
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
