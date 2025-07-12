import React from "react";
import { useState, useEffect } from "react";

import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPaperclip } from "react-icons/fa6";

const NonUserClients = () => {
  const [clients, setClients] = useState([]);
  const [filtredClient, setFiltredClient] = useState([]);
  const [search, setsearch] = useState("");
  const [addingclient, setAddingclient] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    descreption: "",
    tel: "",
    email: "",
  });
  const [newClientError, setNewClientError] = useState("");
  
  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem("clients"));
    if (!storedClients) {
      localStorage.setItem("clients", "[]");
      return;
    }
    setClients(storedClients);
  }, []);
  
  useEffect(() => {
    setFiltredClient(clients);
  }, [clients])
  

  useEffect(() => {
    if (search) {
      setFiltredClient(clients.filter(item=>item.name.toUpperCase().includes(search.toUpperCase())));
      
      
    } else {
      setFiltredClient(clients);
    }
  }, [search]);

  const handleAdd = () => {
    if (!newClient.name) {
      setNewClientError("Name field must not be empty!");
    }
    const storedClients = JSON.parse(localStorage.getItem("clients"));
    const newStoredClients = [...storedClients, newClient];
    localStorage.setItem("clients", JSON.stringify(newStoredClients));
    setNewClient({
      name: "",
      descreption: "",
      tel: "",
      email: "",
    });
    setNewClientError("");
    setAddingclient(false);
    setClients(newStoredClients);
  };

  const handleDeleteClient = (client) => {
    if (window.confirm(`Are you sure you want to delete ${client} ?`)) {
      const storedClients = JSON.parse(localStorage.getItem("clients"));
      const newStoredClients = storedClients.filter(
        (item) => item.name !== client
      );
      localStorage.setItem("clients", JSON.stringify(newStoredClients));
      setClients(newStoredClients);
    }
  };

  return (
    <div className="relative bg-background w-full h-screen p-5 flex flex-col justify-start items-center">
      <div className=" w-full py-3 flex justify-center items-center">
        <p className="text-3xl text-text font-bold !font-playfair">
          Clients List
        </p>
      </div>
      <div className="w-full py-5 flex justify-between items-center ">
        <div className=" relative py-1 border  rounded">
          <input
            type="text"
            placeholder="Search Client"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="outline-none bg-primary-contrast h-full w-full px-1 text-base"
          />
          {search.length > 0 && (
            <IoMdClose
              onClick={() => setsearch("")}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-xl rounded-full bg-accent text-primary-contrast p-0.5 cursor-pointer "
            />
          )}
        </div>
        <div className="flex justify-around items-center gap-3">
          <button
            onClick={() => setAddingclient(true)}
            className="bg-primary p-1 text-start px-3 text-primary-contrast text-lg cursor-pointer rounded font-medium hover:bg-primary-hover hover:shadow"
          >
            Add Client
          </button>
        </div>
      </div>
      <table className="w-full overflow-x-auto">
        <thead className="bg-primary">
          <tr>
            <th className="w-full p-3 text-start px-3 text-primary-contrast text-base font-medium">
              Name
            </th>
            <th className="p-1 text-center px-3 text-primary-contrast text-base font-medium">
              Phone
            </th>
            <th className="p-1 text-center px-3 text-primary-contrast text-base font-medium">
              Email
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtredClient.length === 0 ? (
            <tr>
              <td colSpan="3" className="py-10 text-center">
                <p className="text-lg text-text ">No records available.</p>
                <button
                  onClick={() => setAddingclient(true)}
                  className="bg-primary my-3 p-1 text-start px-3 text-primary-contrast text-lg cursor-pointer rounded font-medium hover:bg-primary-hover hover:shadow"
                >
                  Add Client
                </button>
              </td>
            </tr>
          ) : (
            filtredClient.map((row) => (
              <tr key={row.name}>
                <td className="p-3 text-start px-3 text-text text-lg">
                  {row.name}
                </td>
                <td className="p-3 text-center px-3 text-text text-lg">
                  <a href={`tel:${row.tel}`}>{row.tel}</a>
                </td>
                <td className="p-3 text-center px-3 text-text text-lg">
                  <a href={`mailto:${row.email}`}>{row.email}</a>
                </td>
                <td className="p-3 flex justify-center items-center gap-3">
                  {/* <div className="absolute right-full top-full bg-surface shadow rounded  p-3 flex flex-col justify-center items-center gap-3 invisible group-hover:visible"> */}
                  <a
                    href={`clients/${row.name}`}
                    className="group bg-primary px-3 py-1 rounded text-primary-contrast cursor-pointer flex justify-center items-center gap-2 hover:bg-primary-hover"
                  >
                    <FaPaperclip />
                    <p className="text-primary-contrast">Details</p>
                  </a>
                  <div
                    onClick={() => handleDeleteClient(row.name)}
                    className="group bg-primary px-3 py-1 rounded text-primary-contrast cursor-pointer flex justify-center items-center gap-2 hover:bg-accent"
                  >
                    <RiDeleteBin6Line className="text-primary-contrast" />
                    <p className="text-primary-contrast">Delete</p>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {addingclient && (
        <div className="fixed  top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            onClick={() => setAddingclient(false)}
            className="absolute z-0 bg-shadow top-0 left-0 w-full h-full cursor-pointer"
          ></div>
          <div className="z-10 bg-surface w-2/3 h-2/3 shadow rounded-xl p-3 flex flex-col justify-start items-center gap-3">
            <p className="text-2xl font-medium ">New Client</p>
            <div className="w-4/5 flex-1 overflow-y-auto flex flex-col justify-start items-center gap-5">
              {Object.keys(newClient).map((item) => (
                <div key={item} className="relative w-full">
                  <input
                    type="text"
                    id={item}
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-text bg-transparent rounded-lg border border-text-secondary appearance-none focus:border-primary focus:outline-none focus:ring-0  peer"
                    placeholder=""
                    value={newClient[item]}
                    onChange={(e) =>
                      setNewClient((perv) => ({
                        ...perv,
                        [item]: e.target.value,
                      }))
                    }
                  />
                  <label
                    for={item}
                    class="absolute capitalize text-sm text-text-secondary transform -translate-y-4 scale-75 top-2 left-1 z-10 origin-[0] bg-surface  px-1 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    {" "}
                    {item}
                  </label>
                </div>
              ))}
              {newClientError && (
                <p className="w-full text-accent">{newClientError}</p>
              )}
            </div>
            <button
              onClick={() => handleAdd()}
              className="w-4/5 py-3 rounded-lg text-primary-contrast bg-primary hover:bg-primary-hover cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NonUserClients;
