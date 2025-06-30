import React from "react";
import { useState } from "react";
import Table from '../../components/nonUserInvoice/table';

const NonUserInvoice = () => {

  const today = new Date()
  console.log(today);
  
  const [invoice, setInvoice] = useState({
    id: "",
    date: "dd/mm/yyyy",
    header: null,
    footer: null,
    credentials: {
      from: {
        company: "",
        address: "",
        zip: "",
        tel: "",
        fax: "",
        registerNumber: "",
        nif: "",
      },
      to: {},
    },
    body: {
      items: [],
      tax: 0.19,
    },
  });

  return (
    <main className="bg-background w-full min-h-screen p-5 flex flex-col justify-start items-center">
      <div className="bg-surface w-[21cm] min-h-[29.7cm] shadow p-[1.5cm] flex flex-col justify-start items-center">
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col">
            <input
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
            />
          </div>
          <div className="flex flex-col w-56">
            <div className='w-full flex '>
              <h1 className="flex-1 text-end text-text font-semibold">Invoice NO:</h1>
              <h1 className="flex-1 text-end text-text font-semibold">01234</h1>
            </div>
            <div className='w-full flex '>
              <h1 className="flex-1 text-end text-text font-light">Date:</h1>
              <h1 className="flex-1 text-end text-text font-light">{`${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`}</h1>
            </div>
          </div>
        </div>
        <div className="w-full  py-3 flex justify-center items-center gap-3">
          <div className="w-full h-0.5 bg-text"></div>
          <h1 className="text-center text-6xl text-text uppercase font-base">
            Invoice
          </h1>
        </div>
        <div className='w-full flex flex-col mb-10'>
          <h1 className='text-text text-2xl uppercase'>Issued to</h1>
          <input
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
            />
        </div>
        <Table />
      </div>
    </main>
  );
};

export default NonUserInvoice;
