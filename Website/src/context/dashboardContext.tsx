import React from "react";
import { useState } from "react";
import { DashboardContext } from "./contexts";


const DashboardContextProvider = ({ children }) => {

  const [hideMenu, setHideMenu] = useState(false);
  const [invoiceList, setInvoiceList] = useState(false);
  const [estimateList, setEstimateList] = useState(false);
  const [itemsList, setItemsList] = useState(false);
  const [clientsList, setClientsList] = useState(false);

  return (
    <DashboardContext
      value={{
        hideMenu,
        setHideMenu,
        invoiceList,
        setInvoiceList,
        estimateList,
        setEstimateList,
        itemsList,
        setItemsList,
        clientsList,
        setClientsList,
      }}
    >
      {children}
    </DashboardContext>
  );
};

export default DashboardContextProvider;
