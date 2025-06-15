import { Outlet } from "react-router";
import SideBar from "./sideBar";
import { useState } from "react";

const Layout = () => {

  const [hideMenu, setHideMenu] = useState(false);

  console.log(hideMenu);
  
  return (
    <main className="relative w-full min-h-full flex bg-gray-100">
      <SideBar hideMenu={hideMenu} setHideMenu={setHideMenu}/>
      <div
        className={`${
          !hideMenu && "ml-72"
        } p-3 flex-1 flex flex-col justify-start items-center`}
      >
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
