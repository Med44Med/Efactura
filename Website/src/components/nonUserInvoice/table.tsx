import React from "react";
import { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";

const Table = ({ data }) => {
  const savedItems = [
    { name: "sanibo", unitPrice: 1000 },
    { name: "sabon", unitPrice: 500 },
    { name: "javel", unitPrice: 2000 },
  ];

  const [items, setItems] = useState([]);
  const [addingItems, setAddingItems] = useState(false);
  const [typeOfItem, setTypeOfItem] = useState<null | "EXIST" | "NEW">(null);
  const [existIndex, setExistIndex] = useState(null)
  const [addQty, setAddQty] = useState(0)

  const showItems = () => {
    return items.map((item, index) => (
      <tr key={index}>
        <td className="text-text-secondary text-start py-5">{item?.name}</td>
        <td className="text-text-secondary text-center py-5">
          {item?.unitPrice}
        </td>
        <td className="text-text-secondary text-center py-5">{item?.qty}</td>
        <td className="text-text-secondary text-center py-5">
          {item?.unitPrice * item?.qty}
        </td>
      </tr>
    ));
  };

  const addItems = () => {
    if (addingItems) {
      if (typeOfItem === null) {
        return (
          <tr>
              <td colSpan="2">
                <select
                  onChange={(e) => {
                    if (e.target.value === "null") {
                      return;
                    }
                    if (e.target.value === "add") {
                        setTypeOfItem('NEW')
                        return 
                    }
                    setTypeOfItem('EXIST')
                    setExistIndex(e.target.value)
                }}
                >
                  <option value={"null"}>-- Choose item --</option>
                  <option value={"add"}>-- Add item --</option>
                  {savedItems.map((option, index) => (
                    <option key={index} value={index}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <div>add</div>
              </td>
          </tr>
        );
      } else if (typeOfItem === "EXIST") {
        return (
          <tr>
            <td>{savedItems[existIndex].name}</td>
            <td>{savedItems[existIndex].unitPrice}</td>
            <td><input type="number" value={addQty} onChange={e=>setAddQty(e.target.value)}/></td>
            <td><div onClick={()=>setItems(perv=>([...perv,{name:savedItems[existIndex].name, unitPrice: savedItems[existIndex].unitPrice ,qty:addQty}]))} >add</div></td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>new</td>
          </tr>
        );
      }
      //   return (
      //     <tr>
      //
      //     </tr>
      //   );
    } else {
      return (
        <tr>
          <td colSpan="4">
            <div
              onClick={() => setAddingItems(true)}
              className="group w-full py-3 my-3 flex justify-center items-center gap-3 rounded cursor-pointer hover:bg-primary"
            >
              <h1 className="text-text group-hover:text-primary-contrast ">
                Add Item
              </h1>
              <IoIosAddCircleOutline className="text-text text-xl group-hover:text-primary-contrast " />
            </div>
          </td>
        </tr>
      );
    }
  };

  return (
    <table className="w-full">
      <thead className="border-b-2 border-text">
        <tr>
          <th className="text-text text-2xl font-normal text-start py-3">
            Descreption
          </th>
          <th className="text-text text-2xl font-normal text-center py-3">
            Unit Price
          </th>
          <th className="text-text text-2xl font-normal text-center py-3">
            Qty
          </th>
          <th className="text-text text-2xl font-normal text-center py-3">
            Total
          </th>
        </tr>
      </thead>
      <tbody className="border-text border-b-2">
        {showItems()}
        {addItems()}

        {/* <tr>
          <td className="text-text-secondary text-start py-5">sanibo</td>
          <td className="text-text-secondary text-center py-5">100,00</td>
          <td className="text-text-secondary text-center py-5">1000</td>
          <td className="text-text-secondary text-center py-5">100 000,00</td>
        </tr> */}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="text-text text-2xl text-start py-3">
            SUBTOTAL
          </td>
          <td className="text-text text-center py-3">{items.reduce((sum,value)=>sum + (value.qty * value.unitPrice),0)}</td>
        </tr>
        <tr>
          <td
            colSpan="3"
            className="text-text-secondary text-base text-end py-3"
          >
            Tax (19%)
          </td>
          <td className="text-text text-center py-3">{items.reduce((sum,value)=>sum + (value.qty * value.unitPrice),0) * 0.19}</td>
        </tr>
        <tr>
          <td colSpan="3" className="text-text text-2xl text-end py-3">
            TOTAL
          </td>
          <td className="text-text text-center py-3">{items.reduce((sum,value)=>sum + (value.qty * value.unitPrice),0) + items.reduce((sum,value)=>sum + (value.qty * value.unitPrice),0) *0.19}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
