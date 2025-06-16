import React from "react";
import RecentInvoices from './recent/recentInvoices';
import RecentEstimates from './recent/recentEstimates';

const Recent = () => {
  return (
    <div className="w-full  p-3 flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-start items-center gap-10 ">
        <h1 className="text-3xl text-black font-bold ">Recent activity</h1>
      </div>
      <div className='w-full flex flex-col gap-5 justify-center items-start xl:flex-row'>
        <RecentInvoices />
        <RecentEstimates />
      </div>
    </div>
  );
};

export default Recent;
