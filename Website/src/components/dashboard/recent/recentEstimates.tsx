import React from "react";
import { NavLink } from "react-router";

const RecentEstimates = () => {

    const Estimates = [
    {
      id:'545134654654',
      name:'Estimate-001',
      to:'BMS Group',
      amount:2000,
      date: new Date('2025-05-14')
    },
    {
      id:'54517573654',
      name:'Estimate-002',
      to:'Total Group',
      amount:3500,
      date: new Date('2025-05-13')
    },
    {
      id:'54344334654654',
      name:'Estimate-003',
      to:'BMS Group',
      amount:2000,
      date: new Date('2025-05-14')
    },
    {
      id:'545174573333654',
      name:'Estimate-004',
      to:'Total Group',
      amount:3500,
      date: new Date('2025-05-13')
    }
  ]

  return (
    <div className="w-full flex-1 bg-white rounded shadow p-3 flex flex-col justify-center items-start gap-3">
      <h1 className="text-xl font-semibold">Estimates</h1>
      <table className="w-full">
        <tr className="bg-blue-100">
          <th className="w-1/5 p-2">Date</th>
          <th className="w-1/5 p-2">Number</th>
          <th className="w-1/5 p-2">User</th>
          <th className="w-3/5 p-2">Client</th>
          <th className="w-1/5 p-2">Amount</th>
        </tr>
        {Estimates.length === 0 
          ? <tr slot='empty'><td colspan='5'><h1  className="text-center py-10">You have no Estimates, <NavLink  className="text-center py-5 text-blue-400 font-semibold hover:text-blue-500 hover:underline">create an Estimate</NavLink></h1></td></tr>
          : Estimates.map(row => <tr key={row.id}>
            <td className="text-center">{row.date.toLocaleDateString()}</td>
            <td className="text-center py-5 text-blue-400 font-semibold hover:text-blue-500 hover:underline"><NavLink to={`/Estimate/${row.id}`}>{row.name}</NavLink></td>
            <td className="text-center">Admin</td>
            <td className="text-start">{row.to}</td>
            <td className="text-center">{row.amount}</td>
          </tr>)
        }
      </table>
        {Estimates.length !== 0 && <div className="mt-auto w-full flex justify-end">
            <NavLink to="#"className="bg-blue-400 p-2 rounded  hover:bg-blue-500">
              <h1 className="text-white font-bold">View All</h1>
            </NavLink>
          </div>}
    </div>
  );
};

export default RecentEstimates;
