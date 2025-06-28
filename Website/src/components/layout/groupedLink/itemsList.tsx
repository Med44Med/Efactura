import React from "react";
import { FaRegFile } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router";

const buttonStyle =
  "group w-full flex justify-start items-center gap-5 p-3 px-5 cursor-pointer text-white hover:bg-blue-50 hover:text-white";
const buttonIconStyle = "text-xl text-text font-bold group-hover:text-primary";
const buttonTextStyle = "text-lg text-text font-medium group-hover:text-primary ";
const buttonArrowStyle = "ml-auto text-2xl text-text transition-transform";
const subButtonStyle =
  "group w-full flex justify-start items-center gap-3 p-3 px-8 cursor-pointer !text-white !no-underline hover:bg-blue-50";
const subButtonIconStyle = "text-xl text-text font-bold group-hover:text-primary";
const subButtonIconActiveStyle = "text-xl font-bold text-primary ";
const subButtonTextStyle = "text-base text-text font-medium group-hover:text-primary";
const subButtonTextActiveStyle = "text-base font-medium text-primary";

const ItemsList = ({ show, toggle }) => {
  return (
    <div className={"w-full flex flex-col select-none"}>
      <div onClick={() => toggle("item")} className={buttonStyle}>
        <FaRegFile className={buttonIconStyle} />
        <h6 className={buttonTextStyle}>Items</h6>
        <MdKeyboardArrowDown
          className={`${buttonArrowStyle} ${show && "rotate-180"}`}
        />
      </div>
      {show && (
        <>
          <NavLink className={subButtonStyle} to="/new-items">
            {({ isActive }) => (
              <>
                <FaRegFile className={isActive ? subButtonIconActiveStyle : subButtonIconStyle} />
                <h6 className={isActive ? subButtonTextActiveStyle : subButtonTextStyle}>New Item</h6>
              </>
            )}
          </NavLink>
          <NavLink className={subButtonStyle} to="/items">
            {({ isActive }) => (
              <>
                <FaRegFile className={isActive ? subButtonIconActiveStyle : subButtonIconStyle} />
                <h6 className={isActive ? subButtonTextActiveStyle : subButtonTextStyle}>Items List</h6>
              </>
            )}
          </NavLink>
        </>
      )}
    </div>
  );
};

export default ItemsList;
