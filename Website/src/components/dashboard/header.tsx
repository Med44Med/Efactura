import React from "react";
import { NavLink, Link } from "react-router";
import useAuth from "../../Zustand/auth";
import { handleLogout } from '../../api/auth';
import { useContext } from 'react';
import { ConfigContext } from '../../context/contexts';

const Header = () => {
    const { user } = useAuth();
    const {theme,toggleTheme} = useContext(ConfigContext)
  
  return (
    <div className="w-full h-36 bg-white shadow flex justify-start items-start rounded-xl p-3 m-3">
      <div className="h-full flex-1  flex justify-center items-start gap-1 flex-col pl-36">
        <h1 className="text-3xl text-black font-bold ">Hello,</h1>
        {user?.username ? (
          <Link
            to="/profile"
            className=" text-xl text-blue-400 font-bold hover:text-blue-500 cursor-pointer"
          >
            {user.username}
          </Link>
        ) : (
          <h1 className="text-base text-black font-medium ">
            <NavLink
              to="/login?redirect=/"
              className=" text-blue-400 font-bold hover:text-blue-500  "
            >
              Sign in{" "}
            </NavLink>
            or
            <NavLink
              to="/signup?redirect=/"
              className="text-base text-blue-400 font-bold hover:text-blue-500  "
            >
              {" "}
              Sign up{" "}
            </NavLink>
          </h1>
        )}
      </div>
      <div className="h-full flex-1  flex justify-end items-end gap-1 ">
        <NavLink className="bg-blue-400 p-2 rounded text-white font-bold hover:bg-blue-500">
          New Invoice
        </NavLink>
        <NavLink className="bg-blue-400 p-2 rounded text-white font-bold hover:bg-blue-500">
          New Estimate
        </NavLink>
        <NavLink className="bg-blue-400 p-2 rounded text-white font-bold hover:bg-blue-500">
          New Client
        </NavLink>
        {user && (
          <div
            className="bg-blue-400 p-2 rounded text-white font-bold hover:bg-blue-500 cursor-pointer"
            onClick={() => handleLogout()}
          >
            Log out
          </div>
        )}
        <button onClick={()=>toggleTheme()}>{theme}</button>
      </div>
    </div>
  );
};

export default Header;
