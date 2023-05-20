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
      .get("/api/navtitle", navTitle)
      .then((res) => {
        setNavTitle(res.data);
      })
      .catch((e) => {
        toast.error("huselt yvuulhad aldaa ", e);
      });
  });

  return (
    <nav className={background}>
      <div className="container mx-auto py-4">
        <div className="flex justify-evenly cursor-pointer ">
          <Logo />
          <div className="items-center flex justify-between w-full">
            <ul className="flex ms-16 font-thin p-4 md:p-0rounded-lg  mt-0 border-0 space-x-8 text-xl ">
              {navTitle.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="hover:text-amber-500 duration-300  font-medium hover:border-bottom"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex p-2 w-[450px] items-center justify-around">
            <div>{!currentUser ? <LoginModal /> : <DropDownProfile />}</div>

            <span>
              <div>
                <div className="relative">
                  <FaShoppingBag
                    onClick={toggleSidebar}
                    size="20"
                    className="text-amber-500"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -right-3 -top-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>

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
