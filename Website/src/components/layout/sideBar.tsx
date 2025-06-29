import { IoMdClose } from "react-icons/io";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import Navbar from "./navbar";
import { NavLink } from "react-router";

import logo from "../../assets/logo.svg";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser, FaRegFileAlt, FaRegFile } from 'react-icons/fa';
import { IoSettingsSharp } from "react-icons/io5";

const sidebarStyle: string =
  "absolute top-0 left-0 h-full w-56 flex flex-col justify-start items-center overflow-y-auto  transition-transform origin-left [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-surface [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary";
const buttonStyle =
  "group w-full flex justify-start items-center gap-5 p-3 px-5 cursor-pointer text-text hover:bg-blue-50";
const buttonIconStyle = "text-xl font-bold group-hover:text-primary";
const buttonIconStyleActive =
  "text-xl font-bold text-primary group-hover:text-primary";
const buttonTextStyle =
  "text-lg font-bold  text-text-secondary group-hover:text-primary";
const buttonTextStyleActive = "text-lg font-bold text-primary";

const SideBar = ({ hideMenu, setHideMenu }) => {
  return (
    <>
      <abbr
        title="show sidebar"
        onClick={() => setHideMenu(false)}
        className={`absolute top-3 -left-10 h-10 w-10 bg-primary flex flex-col justify-center items-center overflow-y-auto shadow ${
          hideMenu && "translate-x-full"
        } transition-transform origin-left delay-300 cursor-pointer`}
      >
        <VscLayoutSidebarLeft className="text-xl font-bold text-white " />
      </abbr>
      <div className={`${sidebarStyle} ${hideMenu && "-translate-x-full"}`}>
        {/* <div className="w-full  flex  p-3 justify-end items-center">
          <abbr title="hide" onClick={() => setHideMenu(true)}>
            <IoMdClose className="text-xl font-bold text-primary cursor-pointer" />
          </abbr>
        </div> */}
        <nav className="w-full h-screen flex flex-col justify-start items-center border-t-2 border-blue-100 py-5">
          <NavLink
            to="/"
            className="w-full flex justify-center items-center gap-3 pt-3 pb-10"
          >
            <img src={logo} alt="logo" className="h-8 w-8" />
            <h1 className="text-2xl text-primary font-bold ">µFacture</h1>
          </NavLink>
          <NavLink to="/" className={buttonStyle}>
            {({ isActive }) => (
              <>
                <MdSpaceDashboard
                  className={isActive ? buttonIconStyleActive : buttonIconStyle}
                />
                <h1
                  className={isActive ? buttonTextStyleActive : buttonTextStyle}
                >
                  Dashboard
                </h1>
              </>
            )}
          </NavLink>
          <NavLink to="/invoices" className={buttonStyle}>
            {({ isActive }) => (
              <>
                <FaRegFileAlt
                  className={isActive ? buttonIconStyleActive : buttonIconStyle}
                />
                <h1
                  className={isActive ? buttonTextStyleActive : buttonTextStyle}
                >
                  Invoices
                </h1>
              </>
            )}
          </NavLink>
          <NavLink to="/products" className={buttonStyle}>
            {({ isActive }) => (
              <>
                <FaRegFileAlt
                  className={isActive ? buttonIconStyleActive : buttonIconStyle}
                />
                <h1
                  className={isActive ? buttonTextStyleActive : buttonTextStyle}
                >
                  Products
                </h1>
              </>
            )}
          </NavLink>
          <NavLink to="/invoices" className={buttonStyle}>
            {({ isActive }) => (
              <>
                <FaRegFile
                  className={isActive ? buttonIconStyleActive : buttonIconStyle}
                />
                <h1
                  className={isActive ? buttonTextStyleActive : buttonTextStyle}
                >
                  Clients
                </h1>
              </>
            )}
          </NavLink>
          <NavLink to="/invoices" className={buttonStyle}>
            {({ isActive }) => (
              <>
                <FaRegFile
                  className={isActive ? buttonIconStyleActive : buttonIconStyle}
                />
                <h1
                  className={isActive ? buttonTextStyleActive : buttonTextStyle}
                >
                  Messages
                </h1>
              </>
            )}
          </NavLink>
          <NavLink to="/invoices" className={buttonStyle}>
            {({ isActive }) => (
              <>
                <FaRegFile
                  className={isActive ? buttonIconStyleActive : buttonIconStyle}
                />
                <h1
                  className={isActive ? buttonTextStyleActive : buttonTextStyle}
                >
                  Company
                </h1>
              </>
            )}
          </NavLink>

          <div className="w-full mt-auto">
            <NavLink to="/profile" className={buttonStyle}>
              {({ isActive }) => (
                <>
                  <FaUser
                    className={
                      isActive ? buttonIconStyleActive : buttonIconStyle
                    }
                  />
                  <h1
                    className={
                      isActive ? buttonTextStyleActive : buttonTextStyle
                    }
                  >
                    Profile
                  </h1>
                </>
              )}
            </NavLink>
            <NavLink to="/settings" className={buttonStyle}>
              {({ isActive }) => (
                <>
                  <IoSettingsSharp
                    className={
                      isActive ? buttonIconStyleActive : buttonIconStyle
                    }
                  />
                  <h1
                    className={
                      isActive ? buttonTextStyleActive : buttonTextStyle
                    }
                  >
                    Settings
                  </h1>
                </>
              )}
            </NavLink>
          </div>
        </nav>
        {/* <Navbar /> */}
      </div>
    </>
  );
};

export default SideBar;
