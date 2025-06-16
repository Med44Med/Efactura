import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Estimates = () => {
  return (
    <div className="h-56 bg-white shadow rounded p-3 flex flex-col gap-5">
          <div className="w-full">
            <h1 className="text-xl font-semibold">Estimates</h1>
          </div>
          <div className="w-full flex justify-around items-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <FaRegFileAlt className="text-4xl" />
              <h1 className="text-base font-semibold ">0 Requested</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <FaRegFileAlt className="text-4xl" />
              <h1 className="text-base font-semibold ">0 Answerd</h1>
            </div>
          </div>
          <div className="mt-auto w-full flex justify-end">
            <NavLink className="bg-blue-400 p-2 rounded  hover:bg-blue-500">
              <h1 className="text-white font-bold">View All</h1>
            </NavLink>
          </div>
        </div>
  )
}

export default Estimates