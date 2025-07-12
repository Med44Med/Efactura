import {  Outlet } from 'react-router';
import { Helmet } from "react-helmet";
import NonUserSideBar from '../../components/nonUserInvoice/sideBar';
import { useState } from 'react';

import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";


const NonUserLayout = () => {
  const [hide, setHide] = useState(false)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>µFacture | Create an Invoice</title>
      </Helmet>
      <main className={`${!hide && "pl-56"} relative w-full h-screen overflow-hidden bg-background flex justify-start items-start`}>
        <abbr
          title="hide side-bar"
          onClick={()=>setHide(false)}
          className={`z-50 group absolute bottom-10 left-0 bg-primary p-3 rounded-r-xl cursor-pointer delay-1000 ${hide ? '-translate-x-0':'-translate-x-full'}`}
        >
          <TbLayoutSidebarLeftExpandFilled className="text-primary-contrast text-2xl group-hover:scale-125" />
        </abbr>
        <NonUserSideBar hide={hide} setHide={setHide}/>
        <Outlet />
      </main>
    </>
  );
};

export default NonUserLayout;
