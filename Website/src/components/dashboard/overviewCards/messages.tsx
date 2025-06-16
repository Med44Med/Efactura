import React from 'react'
import { FaRegMessage } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Messages = () => {
  return (
    <div className="h-56 bg-white shadow rounded p-3 flex flex-col gap-5">
          <div className="w-full">
            <h1 className="text-xl font-semibold">Messages</h1>
          </div>
          <div className="w-full flex justify-around items-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <FaRegMessage className="text-4xl" />
              <h1 className="text-base font-semibold ">you have 0 messages</h1>
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

export default Messages