import Logo from "../logo/Logo";
import { FaShoppingBag } from "react-icons/fa";
import Button from "./Button";

import LoginModal from "../login/Modal";

import { useState } from "react";
import { Link } from "react-router-dom";

function FoodList({ foods }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleSubstract = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="px-[40px]">
      {foods.map((food) => (
        <div className="my-2" key={food.id}>
          <div className="flex align-middle">
            <img src={food.respic} alt="" className="rounded-xl" />
            <h1 className="font-bold  text-xl p-3">{food.resname}</h1>
          </div>
          <div className="flex">
            <img src={food.foodpic} alt="" className="mt-5" />
            <h1 className="font-bold text-xl pt-8 w-[220px] ms-4">
              {food.foodname}
            </h1>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="text-4xl font-bold text-amber-500">
              {food.price}
            </div>
            <div className="flex gap-2 ">
              <button
                onClick={handleSubstract}
                className=" flex items-center justify-center  border p-1       text-amber-500 rounded-lg  group bg-amber-500  hover:text-white     "
              >
                <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                  -
                </span>
              </button>
              <input
                className="  rounded-lg  w-20 text-center  border-gray-200 border "
                type="number"
                min="0"
                value={quantity}
              />

              <button
                onClick={handleAdd}
                className=" flex items-center justify-center  border p-1       text-amber-500 rounded-lg  group bg-amber-500  hover:text-white     "
              >
                <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                  +
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between text-gray-400 font-thin">
            <p>Price</p>
            <p>Quantity</p>
          </div>
          <hr className="mt-2" />
        </div>
      ))}
      <div className="flex justify-between mt-5">
        <p className="text-gray-400 font-thin pt-1">Total order:</p>
        <p className="text-3xl font-bold">$25</p>
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-gray-400 font-thin pt-1">To pay</p>
        <p className="text-5xl text-amber-500 font-bold">$25</p>
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-amber-500 rounded-xl w-[100%] h-12 text-white font-thin">
          Checkout
        </button>
      </div>
    </div>
  );
}

function Sidebar({ isSidebarVisible, closeSidebar }) {
  const foods = [
    {
      id: 1,
      resname: "Kennington Lane Cafe",
      respic: "https://bslthemes.com/html/quickeat/assets/img/logo-s.jpg",
      foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-1.png",
      foodname: "Pasta,kiwi and sauce chilli",
      price: "$13",
      quantity: 1,
    },
    {
      id: 2,
      foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-2.png",
      foodname: "Rice with shrimps and kiwi",
      price: "$12",
      quantity: 1,
    },
  ];
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[35%] bg-white transform ${
        isSidebarVisible ? "translate-x-0" : "translate-x-full"
      } transition-all duration-700 z-10`}
    >
      <div className="flex justify-between p-[40px]">
        <div className="text-5xl font-bold">My Orders</div>
        <div>
          <button className="text-5xl" onClick={closeSidebar}>
            ×
          </button>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <FoodList foods={foods} />
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ background }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  const topchoices = [
    {
      id: "1",
      to: "/",
      title: "Home",
    },
    {
      id: "2",
      to: "/restaurants",
      title: "Restaurants",
    },
    {
      id: "3",
      to: "/restaurantsCard",
      title: "Restaurants Card",
    },
    {
      id: "4",
      to: "/contactus",
      title: "Contacts",
    },
    {
      id: "5",
      to: "/checkout",
      title: "Checkout",
    },
  ];

  return (
    <nav className={background}>
      <div className="container mx-auto py-4">
        <div className="flex justify-evenly cursor-pointer ">
          <Logo />
          <div className="items-center flex justify-between w-full">
            <ul className="flex ms-16 font-thin p-4 md:p-0rounded-lg  mt-0 border-0 space-x-8 text-xl ">
              {topchoices.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    className="hover:text-amber-500 duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex p-2 w-[450px] items-center justify-around">
            <div>
              <LoginModal />
            </div>
            <span>
              <div>
                <FaShoppingBag
                  onClick={toggleSidebar}
                  size="20"
                  className="text-amber-500"
                />

                <div className="relative flex-none">
                  <Sidebar
                    isSidebarVisible={isSidebarVisible}
                    closeSidebar={closeSidebar}
                  />
                </div>
              </div>
            </span>
            <Button />
            <div className="flex items-center md:order-2">
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                ariaExpanded="false"
                dataDropdown-toggle="user-dropdown"
                dataDropdown-placement="bottom"
                onClick={toggleProfile}
              >
                <img
                  className="w-10 h-full rounded-full"
                  src="data:image/png;base64,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"
                  alt="user photo"
                />
              </button>
              <div
                className={`z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
                  isProfileOpen ? "block" : "hidden"
                }`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
