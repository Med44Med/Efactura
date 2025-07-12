import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const NonUserClientDetails = () => {
  const { name } = useParams();
  const [details, setDetails] = useState({});
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem("clients"));
    if (!storedClients) {
      return;
    }
    const client = storedClients.filter((item) => item.name === name);
    setDetails(client[0]);
  }, [name]);

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem("invoices"));
    if (!storedInvoices) {
      return;
    }
    const filtredInvoices = storedInvoices.filter(
      (item) => item.to.name === name
    );
    setInvoices(filtredInvoices);
  }, [details, name]);

  return (
    <div className="relative bg-background w-full h-screen p-5 flex flex-col justify-start items-center">
      <div className=" w-full py-3 flex justify-center items-center">
        <p className="text-3xl text-text font-bold !font-playfair">
          {details?.name}
        </p>
      </div>
      <div className="w-full">
        {Object.keys(details).map((item) => (
          <p>{details[item]}</p>
        ))}
      </div>
      <div>
        <p>Invoices:</p>
        <div>{invoices.lenght === 0 ? <p>there is</p> : <p>nothing</p>}</div>
      </div>
    </div>
  );
};

export default NonUserClientDetails;
