import React from "react";
import { NavLink } from "react-router";

import { FaRegFileAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import Invoiced from './overviewCards/invoiced';
import Estimates from './overviewCards/estimates';
import Messages from './overviewCards/messages';

const Overview = () => {

    const [showCalendar, setshowCalendar] = useState(false)
    const [selectCalendar, setSelectCalendar] = useState('Today')

  return (
    <div className="w-full  p-3 flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-start items-center gap-10 ">
        <h1 className="text-3xl text-black font-bold ">Overview</h1>
        <div className="relative bg-white w-fit px-3 py-1 flex justify-center items-center gap-3 cursor-pointer shadow  hover:bg-gray-50" onClick={()=>setshowCalendar(!showCalendar)}>
          <FaRegCalendarAlt />
          <h1 className="text-base font-semibold">{selectCalendar}</h1>
          <MdKeyboardArrowDown className={showCalendar && 'rotate-180'}/>
          <div className={`absolute bg-white shadow-xl top-[110%] left-0 w-72  flex-col justify-start items-start p-3 rounded ${showCalendar ? 'flex' : 'hidden'}`}>
            <h1 className="w-full py-1 px-3 rounded text-gray-500 text-base font-bold hover:bg-gray-100" onClick={()=>setSelectCalendar('Today')}>Today</h1>
            <h1 className="w-full py-1 px-3 rounded text-gray-500 text-base font-bold hover:bg-gray-100" onClick={()=>setSelectCalendar('Yesterday')}>Yesterday</h1>
            <h1 className="w-full py-1 px-3 rounded text-gray-500 text-base font-bold hover:bg-gray-100" onClick={()=>setSelectCalendar('Last Week')}>Last Week</h1>
            <h1 className="w-full py-1 px-3 rounded text-gray-500 text-base font-bold hover:bg-gray-100" onClick={()=>setSelectCalendar('Last 2 Week')}>Last 2 Week</h1>
            <h1 className="w-full py-1 px-3 rounded text-gray-500 text-base font-bold hover:bg-gray-100" onClick={()=>setSelectCalendar('This Months')}>This Months</h1>
            <h1 className="w-full py-1 px-3 rounded text-gray-500 text-base font-bold hover:bg-gray-100" onClick={()=>setSelectCalendar('This Year')}>This Year</h1>
            <h1 className="w-full py-1 px-3 rounded text-gray-500 text-base font-bold hover:bg-gray-100" onClick={()=>setSelectCalendar('All Time')}>All Time</h1>
          </div>
        </div>
      </div>
      <div className="w-full  flex-1 grid grid-cols-1 gap-5 md:grid-cols-3 ">
        <Invoiced />
        <Estimates />
        <Messages />
      </div>
    </div>
  );
};

export default Overview;
