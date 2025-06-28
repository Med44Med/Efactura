import { IoMdClose } from "react-icons/io";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import Navbar from "./navbar";

const sidebarStyle:string = "absolute top-0 left-0 h-full bg-surface w-56 flex flex-col justify-start items-center overflow-y-auto shadow transition-transform origin-left [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-surface [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary";

const SideBar = ({ hideMenu, setHideMenu }) => {
  return (
    <>
      <abbr
        title="show sidebar"
        onClick={() => setHideMenu(false)}
        className={`absolute top-3 -left-10 h-10 w-10 bg-primary flex flex-col justify-center items-center overflow-y-auto shadow ${
          hideMenu && "translate-x-full"
        } transition-transform origin-left delay-300 cursor-pointer`}
      >
        <VscLayoutSidebarLeft className="text-xl font-bold text-white " />
      </abbr>
      <div className={`${sidebarStyle} ${hideMenu && "-translate-x-full"}`}>
        <div className="w-full  flex  p-3 justify-end items-center">
          <abbr title="hide" onClick={() => setHideMenu(true)}>
            <IoMdClose className="text-xl font-bold text-text cursor-pointer" />
          </abbr>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default SideBar;
