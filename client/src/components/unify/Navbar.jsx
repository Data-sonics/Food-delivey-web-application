import Logo from "../logo/Logo";
import { FaShoppingBag } from "react-icons/fa";
import Button from "./Button";

import LoginModal from "../login/Modal";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import DropDownProfile from "../login/DropDownProfile";
import Sidebar from "../home/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";

export default function Navbar({ background, cartCount = 0 }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { currentUser } = useCurrentUser();
  const [navTitle, setNavTitle] = useState([]);

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
      <div className="container mx-auto py-4">
        <div className="flex justify-evenly  ">
          <a href="/">
            <Logo />
          </a>
          <div className="items-center flex justify-between w-full">
            <ul className="flex mx-10 font-thin p-4  mt-0 border-0 space-x-8 text-xl  ">
              {navTitle.map((item, index) => (
                <li key={index} className="">
                  <button className="">
                    <Link
                      to={item.to}
                      className="hover:text-amber-500 duration-300  font-medium  border-b-4 hover:border-b-amber-500 border-b-transparent"
                    >
                      {item.title}
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex p-2 w-[450px] items-center justify-around">
            <div>{!currentUser ? <LoginModal /> : <DropDownProfile />}</div>

            <span>
              <div>
                <button
                  onClick={toggleSidebar}
                  className="relative shadow-xl bg-white p-2 rounded-xl border-2 border-amber-500    "
                >
                  <FaShoppingBag size="20" className="fill-amber-500  " />
                  {cartCount > 0 && (
                    <span className="absolute -right-3 -top-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
                <div className="relative flex-none">
                  <Sidebar
                    isSidebarVisible={isSidebarVisible}
                    closeSidebar={closeSidebar}
                  />
                </div>
              </div>
            </span>
            <Button />
          </div>
        </div>
      </div>
    </nav>
  );
}
