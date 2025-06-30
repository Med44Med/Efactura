import logo from "../../assets/logo.svg";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
import { useEffect, useContext } from "react";
import { ConfigContext } from "../../context/contexts";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RiFileAddLine } from "react-icons/ri";
import { IoMdPrint } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

const NonUserDashboard = () => {
  const { theme, toggleTheme } = useContext(ConfigContext);
  console.log(theme);

  useEffect(() => {}, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage | µFacture</title>
      </Helmet>
      <main className="w-full min-h-screen bg-background p-8 grid grid-cols-1 grid-rows-4 gap-5 sm:grid-cols-2 sm:grid-rows-3">
        <div className="relative bg-primary shadow row-span-2 col-span-1 rounded-xl flex flex-col justify-center items-center gap-3 sm:row-span-2 sm:col-span-2">
          <div className="flex justify-center items-center gap-3">
            <img src={logo} alt="logo" className="h-16 w-16 " />
            <h1 className="text-5xl text-primary-contrast font-medium">
              uFacture
            </h1>
          </div>
          <h1 className="w-1/3 text-center text-primary-contrast ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita quos consectetur totam ipsum.
          </h1>
          <div className="flex flex-col gap-3 justify-center items-center">
            <Link
              to="/login"
              className="bg-primary-contrast px-20 py-1 rounded font-medium text-2xl mt-10 hover:bg-accent hover:text-primary-contrast"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-primary-contrast text-base font-base !transition-none hover:font-medium hover:underline"
            >
              Create an account
            </Link>
          </div>
          <div className="absolute top-3 right-3">
            {theme === "dark" ? (
              <MdLightMode
                className="text-primary-contrast cursor-pointer"
                onClick={() => toggleTheme()}
              />
            ) : (
              <MdDarkMode
                className="text-primary-contrast cursor-pointer"
                onClick={() => toggleTheme()}
              />
            )}
          </div>
        </div>
        <div className="bg-surface shadow row-span-1 col-span-1 rounded-xl flex flex-col justify-start items-start gap-3 p-5">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-text font-semibold text-2xl capitalize">
              invoices
            </h1>
            <abbr title="Create new invoice">
              <Link
                to="/invoice"
                className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-primary"
              >
                <RiFileAddLine className=" text-primary text-2xl hover:text-primary-contrast hover:bg-primary rounded-full" />
              </Link>
            </abbr>
          </div>
          <table className=" w-full p-1">
            <thead className="w-full bg-blue-100">
              <tr className="w-full">
                <th className="w-1/12">No</th>
                <th className="w-1/6">Date</th>
                <th className="w-1/6">to</th>
                <th className="w-1/3">name</th>
                <th className="w-1/6"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">No</td>
                <td className="text-center">Date</td>
                <td className="text-center">name</td>
                <td className="text-center">name</td>
                <td className="py-3 flex justify-center items-center gap-3">
                  <abbr title="print"><IoMdPrint className="text-xl cursor-pointer hover:text-primary" /></abbr>
                  <abbr title="delete"><MdOutlineDeleteOutline className="text-xl cursor-pointer hover:text-accent" /></abbr>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-surface shadow row-span-1 col-span-1 rounded-xl"></div>
      </main>
    </>
  );
};

export default NonUserDashboard;
