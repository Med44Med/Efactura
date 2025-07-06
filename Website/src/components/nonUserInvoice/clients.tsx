import React from "react";
import { useState, useEffect } from "react";

import { IoMdAdd } from "react-icons/io";

const senderOptions = [
  { name: "Address", value: "Address" },
  { name: "Zip", value: "Zip" },
  { name: "Tel", value: "Tel" },
  { name: "Fax", value: "Fax" },
  { name: "No of Register of Commerce", value: "R/C" },
  { name: "No of Fiscal", value: "NIF" },
  { name: "Bank Account", value: "RIP" },
];

const Clients = () => {
  const [savedClients, setSavedClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const LS = JSON.parse(localStorage.getItem("savedInfo"));
    const clients = LS?.clients;
    if (clients) {
      setSavedClients(clients);
    } else {
      if (LS) {
        localStorage.setItem("savedInfo", JSON.stringify({ ...LS,clients: [] }));
      } else {
        localStorage.setItem("savedInfo", JSON.stringify({ clients: [] }));
      }
    }
  }, []);


  return (
    <div className="w-full flex flex-col mb-10">
      <h1 className="text-text text-2xl uppercase">Issued to</h1>
      {selectedClient ? (
        <h1>yes</h1>
      ) : (
        <div
          onClick={() => setEditing(true)}
          className="w-56 min-h-20 bg-gray-100 hover:bg-gray-300 flex justify-center items-center gap-3 rounded-md cursor-pointer"
        >
          <h1 className="text-text text-xl">Add Client</h1>
          <IoMdAdd />
        </div>
      )}
      {editing && (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center">
          <div
            onClick={() => setEditing(false)}
            className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,.4)]"
          ></div>
          <div className=" z-10 bg-surface w-4/5 h-2/3 rounded-lg flex flex-col justify-start items-center gap-5 p-5">
            <h1 className="text-6xl text-text">Clients</h1>
            <div className="w-full flex justify-between">
              <input
                type="text"
                className="rounded border w-72 text-base bg-white px-3 "
                placeholder="search client"
              />
              <div className="bg-primary text-primary-contrast px-5 py-1 rounded text-lg capitalize font-medium cursor-pointer hover:bg-primary-hover">
                add Client
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-primary">
                  <th className="py-3 text-primary-contrast">Name</th>
                  <th className="py-3 text-primary-contrast">Email</th>
                  <th className="py-3 text-primary-contrast">Tel</th>
                  <th className="py-3 text-primary-contrast">Last Invoice</th>
                </tr>
              </thead>
              <tbody>
                {savedClients.length === 0 ? (
                  <tr className="group cursor-pointer">
                    <td colSpan="4" className="text-text text-lg text-center py-10 px-5 group-hover:text-primary-hover">
                      Nothing
                    </td>
                  </tr>
                ) : (
                  savedClients.map((client) => (
                    <tr
                      className="group cursor-pointer"
                      onClick={() => console.log("hello")}
                    >
                      <td className="text-text text-lg text-start py-3 px-5 group-hover:text-primary-hover">
                        {client?.name}
                      </td>
                      <td className="text-text text-lg text-start py-3 px-5 group-hover:text-primary-hover">
                        {client?.email}
                      </td>
                      <td className="text-text text-lg text-start py-3 px-5 group-hover:text-primary-hover">
                        {client?.tel}
                      </td>
                      <td className="text-text text-lg text-start py-3 px-5 group-hover:text-primary-hover">
                        {client?.lastInvoice}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* <input
        type="text"
        placeholder="[Company Name]"
        className="outline-none bg-transparent text-text text-xl placeholder:text-text-secondary"
      />
      <input
        type="text"
        placeholder="[Address]"
        className="outline-none bg-transparent text-text text-sm placeholder:text-text-secondary"
      />
      <input
        type="text"
        placeholder="[Zip]"
        className="outline-none text-text text-sm placeholder:text-text-secondary"
      />
      <input
        type="text"
        placeholder="[Tel]"
        className="outline-none text-text text-sm placeholder:text-text-secondary"
      />
      <input
        type="text"
        placeholder="[Fax]"
        className="outline-none text-text text-sm placeholder:text-text-secondary"
      />
      <input
        type="text"
        placeholder="[No of registre]"
        className="outline-none text-text text-sm placeholder:text-text-secondary"
      />
      <input
        type="text"
        placeholder="[NIF]"
        className="outline-none text-text text-sm placeholder:text-text-secondary"
      /> */}
    </div>
  );
};

export default Clients;
