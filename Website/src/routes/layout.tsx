import React from "react";
import { Outlet,useLocation,Link    } from "react-router";

import { useState, useEffect } from 'react';

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

const Layout = () => {
  const {pathname} = useLocation()
  
  const [hideMenu, setHideMenu] = useState(false);
  const [invoiceList, setInvoiceList] = useState(false);
  const [estimateList, setEstimateList] = useState(false);
  const [itemsList, setItemsList] = useState(false);
  const [clientsList, setClientsList] = useState(false);
  
  useEffect(() => {
    if (pathname.includes('/invoices')) {
      setInvoiceList(true)
    }
  
  }, [pathname])
  
  return (
    <main className="relative w-full min-h-full flex bg-gray-100">
      <abbr
        title="show sidebar"
        onClick={() => setHideMenu(false)}
        className={`absolute top-3 -left-10 h-10 w-10 bg-white flex flex-col justify-center items-center overflow-y-auto shadow ${
          hideMenu && "translate-x-full"
        } transition-transform origin-left delay-150 cursor-pointer`}
      >
        <VscLayoutSidebarLeft className="text-xl font-bold text-black " />
      </abbr>

      <div
        className={`absolute top-0 left-0 h-full w-56 bg-white flex flex-col justify-start items-center overflow-y-auto shadow ${
          hideMenu && "-translate-x-full"
        } transition-transform origin-left`}
      >
        <div className="w-full  flex  p-3 justify-end items-center">
          <abbr title="hide" onClick={() => setHideMenu(true)}>
            <IoMdClose className="text-xl font-bold text-black cursor-pointer" />
          </abbr>
        </div>

        <Link to='/' className="text-4xl text-blue-700 font-bold p-5">Efacture</Link>
        <nav className="w-full flex flex-col justify-start items-center border-t-2 border-gray-300 py-3">
          <Link
            to="/"
            className="w-full flex justify-start items-center gap-5 p-3 px-5 cursor-pointer text-black"
          >
            <MdSpaceDashboard className="text-xl font-bold" />
            <h1 className="text-lg font-medium text-black">Dashboard</h1>
          </Link>
          <div
            className="w-full flex flex-col select-none"
            onClick={() => setInvoiceList(!invoiceList)}
          >
            <div
              className={`w-full flex justify-start items-center gap-5 py-3 px-5 cursor-pointer text-black   ${
                invoiceList && "bg-gray-200"
              }`}
            >
              <FaRegFileAlt className="text-xl font-bold" />
              <h6 className="text-lg font-medium">Invoices</h6>
              <MdKeyboardArrowDown
                className={`ml-auto text-3xl  ${
                  invoiceList && "rotate-180"
                } transition-transform`}
              />
            </div>
            {invoiceList && (
              <>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3 px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="/invoices/new"
                >
                  <h6 className="text-md font-medium">New Invoice</h6>
                </Link>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3 px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="/invoices"
                >
                  <h6 className="text-md font-medium">Invoices List</h6>
                </Link>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3 px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="/invoices/templates"
                >
                  <h6 className="text-md font-medium">Invoices Templates</h6>
                </Link>
              </>
            )}
          </div>
          <div
            className="w-full flex flex-col select-none"
            onClick={() => setEstimateList(!estimateList)}
          >
            <div
              className={`w-full flex justify-start items-center gap-5 py-3 px-5 cursor-pointer text-black   ${
                estimateList && "bg-gray-200"
              }`}
            >
              <FaRegFile className="text-xl font-bold" />
              <h6 className="text-lg font-medium">Estimate</h6>
              <MdKeyboardArrowDown
                className={`ml-auto text-3xl  ${
                  estimateList && "rotate-180"
                } transition-transform`}
              />
            </div>
            {estimateList && (
              <>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3  px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="#"
                >
                  <h6 className="text-md font-medium">New Estimate</h6>
                </Link>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3  px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="#"
                >
                  <h6 className="text-md font-medium">Estimates List</h6>
                </Link>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3  px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="#"
                >
                  <h6 className="text-md font-medium">Estimates Templates</h6>
                </Link>
              </>
            )}
          </div>
          <div
            className="w-full flex flex-col select-none"
            onClick={() => setItemsList(!itemsList)}
          >
            <div
              className={`w-full flex justify-start items-center gap-5 py-3 px-5 cursor-pointer text-black   ${
                itemsList && "bg-gray-200"
              }`}
            >
              <FaBox className="text-xl font-bold" />
              <h6 className="text-lg font-medium">Products</h6>
              <MdKeyboardArrowDown
                className={`ml-auto text-3xl  ${
                  itemsList && "rotate-180"
                } transition-transform`}
              />
            </div>
            {itemsList && (
              <>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3 px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="#"
                >
                  <h6 className="text-md font-medium">New Product</h6>
                </Link>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3 px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="#"
                >
                  <h6 className="text-md font-medium">Products List</h6>
                </Link>
              </>
            )}
          </div>
          <div
            className="w-full flex flex-col select-none"
            onClick={() => setClientsList(!clientsList)}
          >
            <div
              className={`w-full flex justify-start items-center gap-5 py-3 px-5 cursor-pointer text-black   ${
                clientsList && "bg-gray-200"
              }`}
            >
              <FaUsers className="text-xl font-bold" />
              <h6 className="text-lg font-medium">Clients</h6>
              <MdKeyboardArrowDown
                className={`ml-auto text-3xl  ${
                  clientsList && "rotate-180"
                } transition-transform`}
              />
            </div>
            {clientsList && (
              <>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3 px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="#"
                >
                  <h6 className="text-md font-medium">New Client</h6>
                </Link>
                <Link
                  className="w-full bg-gray-200 flex justify-start items-center gap-3 p-3 px-12 cursor-pointer !text-black !no-underline hover:bg-blue-200"
                  to="#"
                >
                  <h6 className="text-md font-medium">Clients List</h6>
                </Link>
              </>
            )}
          </div>
        </nav>
        <div className="w-full flex flex-col justify-start items-center border-t-2 border-gray-300 py-3">
          <Link
            to=""
            className="w-full flex justify-start items-center gap-3 p-3 px-5 cursor-pointer text-black"
          >
            <IoSettingsSharp className="text-xl font-bold" />
            <h1 className="text-lg font-medium text-black">Settings</h1>
          </Link>
          <Link
            to=""
            className="w-full flex justify-start items-center gap-3 p-3 px-5 cursor-pointer text-black"
          >
            <FaRegFileLines className="text-xl font-bold" />
            <h1 className="text-lg font-medium text-black">Privacy</h1>
          </Link>
          <Link
            to=""
            className="w-full flex justify-start items-center gap-3 p-3 px-5 cursor-pointer text-black"
          >
            <FaRegFileLines className="text-xl font-bold" />
            <h1 className="text-lg font-medium text-black">Terms</h1>
          </Link>
        </div>
      </div>
      <div className={`${!hideMenu && "ml-56"} p-3 flex-1 flex flex-col justify-start items-center`}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
