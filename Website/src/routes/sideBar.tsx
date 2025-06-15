import React from "react";
import { NavLink } from "react-router";

import { useRef, useState } from 'react';

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
import { DashboardContext } from "../context/contexts";
import Navbar from './navbar';

const sidebarStyle =
  "absolute top-0 left-0 h-full w-72 bg-[#242424] flex flex-col justify-start items-center overflow-y-auto shadow transition-transform origin-left";


const SideBar = ({hideMenu,setHideMenu}) => {
  
  return (
    <>
      <abbr
        title="show sidebar"
        onClick={() => setHideMenu(false)}
        className={`absolute top-3 -left-10 h-10 w-10 bg-white flex flex-col justify-center items-center overflow-y-auto shadow ${
          hideMenu && "translate-x-full"
        } transition-transform origin-left delay-150 cursor-pointer`}
      >
        <VscLayoutSidebarLeft className="text-xl font-bold text-white " />
      </abbr>
      <div className={`${sidebarStyle} ${hideMenu && "-translate-x-full"}`}>
        <div className="w-full  flex  p-3 justify-end items-center">
          <abbr title="hide" onClick={() => setHideMenu(true)}>
            <IoMdClose className="text-xl font-bold text-white cursor-pointer" />
          </abbr>
        </div>

        
        <Navbar />
      </div>
    </>
  );
};

export default React.memo(SideBar);
