import { Outlet } from "react-router";
import { useState } from "react";
import SideBar from '../components/layout/sideBar';

const Layout = () => {

  const [hideMenu, setHideMenu] = useState<boolean>(false);
  
  return (
    <main className="relative w-full min-h-full flex bg-gray-100">
      <SideBar hideMenu={hideMenu} setHideMenu={setHideMenu}/>
      <div className={`${!hideMenu && "ml-72"} h-screen overflow-y-auto overflow-x-hidden p-3 flex-1 flex flex-col justify-start items-center gap-5`}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
