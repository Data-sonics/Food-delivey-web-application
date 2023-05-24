import Logo from "../logo/Logo";
import { FaShoppingBag, FaBars } from "react-icons/fa";

import LoginModal from "../login/Modal";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import DropDownProfile from "../login/DropDownProfile";
import Sidebar from "../home/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar({ background, cartCount = 0 }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { currentUser } = useCurrentUser();
  const [navTitle, setNavTitle] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    axios
      .get("/api/navtitle")
      .then((res) => {
        setNavTitle(res.data);
      })
      .catch((e) => {
        toast.error("huselt yvuulhad aldaa ", e);
      });
  }, []);

  return (
    <nav className={background}>
      <div className="container  mx-auto py-4">
        <div className="flex justify-between   items-center">
          <div className="flex  ">
            <a href="/">
              <Logo />
            </a>
            <ul
              className={`md:flex md:items-center md:pb-0 gap-10   ${
                open && "bg-white rounded-2xl border-2 border-amber-500"
              } absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
                !open && "mx-10"
              }  transition-all ease-in duration-500 ${
                open ? "top-24" : "top-[-450px]"
              } md:opacity-100  `}
            >
              {navTitle.map((item, index) => (
                <li
                  key={index}
                  className={`w-max ${open && "md:ml-8"}  text-xl md:my-0 my-7`}
                >
                  <Link
                    to={item.to}
                    className="hover:text-amber-500 duration-300  md:w-auto font-medium md:text-lg  border-b-4 hover:border-b-amber-500 border-b-transparent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <div className="flex   items-center gap-5 ">
              <div>{!currentUser ? <LoginModal /> : <DropDownProfile />}</div>

              <span>
                <div>
                  <button
                    onClick={toggleSidebar}
                    className="relative shadow-xl bg-white p-3   rounded-xl border-2 border-amber-500    "
                  >
                    <FaShoppingBag size="20" className="fill-amber-500  " />
                    {cartCount > 0 && (
                      <span className="absolute -right-3 -top-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold  leading-none text-white bg-red-500 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </button>
                  <Sidebar
                    isSidebarVisible={isSidebarVisible}
                    closeSidebar={closeSidebar}
                  />
                </div>
              </span>
              <button
                onClick={() => setOpen(!open)}
                className="text-3xl cursor-pointer md:hidden  rounded-xl border-2 border-amber-500 shadow-xl bg-white p-2 text-amber-500 focus:outline-none   block "
              >
                {open ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
