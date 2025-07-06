import React from "react";
import { useState, useEffect } from "react";

import { MdEdit, MdDelete } from "react-icons/md";
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

const Sender = ({ senderInfo, setSenderInfo, onSubmitSenderInfo }) => {
  const [editing, setEditing] = useState(false);
  const [addingKey, setAddingKey] = useState(false);
  const [newKey, setNewKey] = useState({ key: "R/C", value: "" });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedInfo"))?.sender;
    if (data) {
      setSenderInfo(data);
    } else {
      return;
    }
  }, []);

  const handleAddKey = () => {
    if (newKey.value === "") {
      alert("value is empty");
      return;
    }
    setSenderInfo((perv) => ({
      ...perv,
      [newKey.key]: `${newKey.key} : ${newKey.value}`,
    }));
    setNewKey({ key: "", value: "" });
    setAddingKey(false);
  };

  const handleSubmit = () => {
    onSubmitSenderInfo();
    setEditing(false);
    setAddingKey(false);
    setNewKey({ key: "R/C", value: "" });
  };

  
  return (
    <div className="relative group flex-1 flex flex-col cursor-pointer rounded-xl p-3 ">
      {editing ? (
        <>
          {Object.keys(senderInfo).map((key) => {
            return (
              <div key={key} className="flex justify-start items-center gap-3">
                {key !== "name" && (
                  <MdDelete
                    className="text-text hover:text-accent"
                    onClick={() =>
                      setSenderInfo((perv) => {
                        const { [key]: _, ...newObject } = perv;
                        return newObject;
                      })
                    }
                  />
                )}
                <input
                  value={senderInfo[key]}
                  onChange={(e) =>
                    setSenderInfo((perv) => ({
                      ...perv,
                      [key]: e.target.value,
                    }))
                  }
                  className={`outline-none bg-transparent text-text ${
                    key === "name" ? " text-xl" : "text-sm"
                  } placeholder:text-text-secondary placeholder:capitalize`}
                  placeholder={`[${key}]`}
                />
              </div>
            );
          })}
          {addingKey ? (
            <div className="w-full flex justify-start items-center gap-1 bg-primary rounded-xl mt-3 overflow-hidden">
              <select
                value={newKey.key}
                onChange={(e) =>
                  setNewKey((perv) => ({ ...perv, key: e.target.value }))
                }
                className="text-primary-contrast py-1"
              >
                {senderOptions.filter(opt=>!Object.keys(senderInfo).includes(opt.value)).map(opt=><option key={opt.value} className="text-black" value={opt.value}>{opt.name}</option>)}
                
              </select>
              <input
                type="text"
                value={newKey.value}
                onChange={(e) =>
                  setNewKey((perv) => ({ ...perv, value: e.target.value }))
                }
                className="outline-none bg-white h-full mr-3 rounded"
              />
              <div onClick={() => handleAddKey()}>Add</div>
            </div>
          ) : (
            <div
              className="border border-primary w-36 flex justify-center items-center gap-3 py-1 rounded mt-3"
              onClick={() => setAddingKey(true)}
            >
              <h1 className="text-primary text-base">Add</h1>
              <IoMdAdd className="text-primary text-base" />
            </div>
          )}
          <div
            onClick={() => handleSubmit()}
            className="mt-3 bg-primary hover:bg-primary-hover px-5 py-2 w-56 rounded text-center text-primary-contrast"
          >
            Submit
          </div>
        </>
      ) : (
        <>
          {Object.keys(senderInfo).map((key) => {
            if (senderInfo[key]) {
              return (
                <h1
                  className={`text-text ${
                    key === "name" ? "text-xl" : "text-sm"
                  } capitalize`}
                  key={key}
                >
                  {senderInfo[key]}
                </h1>
              );
            } else {
              return (
                <h1
                  className={`text-text-secondary ${
                    key === "name" ? "text-xl" : "text-sm"
                  } capitalize`}
                  key={key}
                >
                  [{key}]
                </h1>
              );
            }
          })}
          <div
            onClick={() => setEditing(true)}
            className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.1)] opacity-0 rounded-xl group-hover:opacity-100 flex justify-center items-center gap-3"
          >
            <h1 className="text-text">Edit</h1>
            <MdEdit className="text-text" />
          </div>
        </>
      )}
    </div>
  );
};

export default Sender;
