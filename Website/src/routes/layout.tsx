import { Outlet } from "react-router";
import { useState, useEffect } from 'react';
import SideBar from '../components/layout/sideBar';
import useAuth from '../Zustand/auth';

const Layout = () => {

  const {user} = useAuth()
  
  const [hideMenu, setHideMenu] = useState<boolean>(false);
  
  
  
  return (
    <main className="relative w-full min-h-full flex bg-background">
      {user && <SideBar hideMenu={hideMenu} setHideMenu={setHideMenu}/>}
      <div className={`${!hideMenu && user && "ml-56"} h-screen overflow-y-auto overflow-x-hidden p-10 flex-1 flex flex-col justify-start items-center gap-5`}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
