import React from "react";
import { useState } from "react";
import Table from "../../components/nonUserInvoice/table";
import Sender from "../../components/nonUserInvoice/sender";
import Clients from "../../components/nonUserInvoice/clients";
import Console from "../../components/nonUserInvoice/console";

const NonUserInvoice = () => {
  const today = new Date();

  const [invoice, setInvoice] = useState({
    name: "INV-001",
    date: "dd/mm/yyyy",
    no: "Invoice No",
    template: "default",
    settings: { margin: 1.5, primaryColor: "#1a76bc" },
    header: null,
    footer: null,
    credentials: {
      from: {
        name: "",
        address: "",
        zip: "",
        tel: "",
        fax: "",
      },
      to: {},
    },
    body: {
      items: [],
      tax: 0.19,
    },
  });

  const [senderInfo, setSenderInfo] = useState({
    name: "",
    address: "",
    zip: "",
    tel: "",
    fax: "",
  });

  const onSubmitSenderInfo = () => {
    const cleanObject = Object.fromEntries(
      Object.entries(senderInfo).filter(([, value]) => value)
    );
    setSenderInfo(cleanObject);
    localStorage.setItem("sender", JSON.stringify(cleanObject));
  };

  return (
    <div className="relative bg-background w-full h-screen flex flex-col justify-start items-center">
      <Console
        selectedTemplate={invoice.template}
        invoice={invoice}
        setInvoice={setInvoice}
      />

      <div className="bg-background w-full p-10 flex flex-col items-center overflow-y-auto">
        <div className="bg-surface w-[21cm] min-h-[29.7cm] shadow p-[1.5cm] flex flex-col justify-start items-center">
          <div className="w-full  py-3 flex justify-center items-center gap-3">
            <h1 className="text-center text-6xl text-text uppercase font-base">
              Invoice
            </h1>
            <div className="w-full h-0.5 bg-text"></div>
          </div>
          <div className="w-full py-3 flex justify-between items-start">
            <Sender
              senderInfo={senderInfo}
              setSenderInfo={setSenderInfo}
              onSubmitSenderInfo={onSubmitSenderInfo}
            />
            <div className="flex flex-col w-56">
              <div className="w-full flex ">
                <h1 className="flex-1 text-end text-text font-semibold">
                  Invoice NO:
                </h1>
                <h1 className="flex-1 text-end text-text font-semibold">
                  01234
                </h1>
              </div>
              <div className="w-full flex ">
                <h1 className="flex-1 text-end text-text font-light">Date:</h1>
                <h1 className="flex-1 text-end text-text font-light">{`${today.getDate()}.${
                  today.getMonth() + 1
                }.${today.getFullYear()}`}</h1>
              </div>
            </div>
          </div>

          <Clients />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default NonUserInvoice;
