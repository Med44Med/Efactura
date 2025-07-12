import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink, Link } from "react-router";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegFileAlt, FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const NonUserSideBar = ({ hide, setHide }) => {
  return (
    <div
      className={`absolute bg-surface top-0 left-0 h-full w-56 shadow flex flex-col justify-start items-center overflow-y-auto  transition-transform origin-left ${
        hide && "-translate-x-full"
      }`}
    >
      <div className="relative bg-primary w-full p-5 mb-3 flex justify-center items-center  hover:bg-primary-hover">
        <Link
          to="/"
          className=" w-full rounded p-5 mb-3 flex justify-start items-center gap-2 "
        >
          <img src={logo} alt="Logo" className="w-8 h-8 bg-cover bg-center" />
          <p className="!font-playfair font-medium text-3xl text-primary-contrast">
            {import.meta.env.VITE_PROJECT_NAME}
          </p>
        </Link>
        <abbr
          title="hide side-bar"
          onClick={()=>setHide(true)}
          className="absolute bottom-0 right-0 p-1 cursor-pointer"
        >
          <TbLayoutSidebarLeftCollapseFilled className="text-primary-contrast text-2xl" />
        </abbr>
      </div>
      <nav className="w-full flex-1 p-3 flex flex-col justify-between items-center">
        <div className="w-full flex flex-col justify-start items-center">
          <NavLink
            to="/"
            className="w-full rounded p-2 mb-3 flex justify-start items-center gap-2 hover:bg-hover [&.active]:bg-primary [&.active]:hover:bg-primary-hover"
          >
            {({ isActive }) => (
              <>
                <FaRegFileAlt
                  className={`text-2xl ${
                    isActive ? "text-primary-contrast" : "text-text"
                  }`}
                />
                <p
                  className={` text-lg font-medium capitalize ${
                    isActive ? "text-primary-contrast" : "text-text"
                  }`}
                >
                  invoice
                </p>
              </>
            )}
          </NavLink>
          <NavLink
            to="/clients"
            className="w-full rounded p-2 mb-3 flex justify-start items-center gap-2 hover:bg-hover [&.active]:bg-primary [&.active]:hover:bg-primary-hover"
          >
            {({ isActive }) => (
              <>
                <FaUsers
                  className={`text-2xl ${
                    isActive ? "text-primary-contrast" : "text-text"
                  }`}
                />
                <p
                  className={` text-lg font-medium capitalize ${
                    isActive ? "text-primary-contrast" : "text-text"
                  }`}
                >
                  clients
                </p>
              </>
            )}
          </NavLink>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <NavLink
            to="/settings"
            className="mt-auto w-full rounded p-2 mb-3 flex justify-start items-center gap-2 hover:bg-hover [&.active]:bg-primary [&.active]:hover:bg-primary-hover"
          >
            {({ isActive }) => (
              <>
                <IoSettingsSharp
                  className={`text-2xl ${
                    isActive ? "text-primary-contrast" : "text-text"
                  }`}
                />
                <p
                  className={` text-lg font-medium capitalize ${
                    isActive ? "text-primary-contrast" : "text-text"
                  }`}
                >
                  settings
                </p>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NonUserSideBar;
