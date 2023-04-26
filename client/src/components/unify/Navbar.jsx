import Logo from "../logo/Logo";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

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
        <div className="my-2">
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
            <div className="flex">
              <button
                className=" flex items-center justify-center p-0.5 mb-1 mr-1    text-amber-500 rounded-lg  group bg-amber-500  hover:text-white"
                onClick={handleSubstract}
              >
                <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                  -
                </span>
              </button>
              <button className=" flex items-center justify-center p-0.5 mb-1 mr-1 rounded-lg  group border-gray-200 border ">
                <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                  {quantity}
                </span>
              </button>
              <button
                className=" flex items-center justify-center p-0.5 mb-1 mr-1    text-amber-500 rounded-lg  group bg-amber-500  hover:text-white"
                onClick={handleAdd}
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

export default function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  const topchoices = ["Home", "About us", "Restaurants", "Pages", "Contacts"];

  return (
    <nav className="bg-gradient">
      <div className="container mx-auto py-4">
        <div className="flex justify-evenly cursor-pointer ">
          <Logo />
          <div className="items-center flex justify-between w-full">
            <ul className="flex ms-16 font-thin p-4 md:p-0rounded-lg  mt-0 border-0 space-x-8 text-xl ">
              {topchoices.map((item, index) => (
                <li key={index}>
                  <a href="/" className="hover:text-amber-500 duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex p-2">
            <span className="mt-4 mx-10">
              <div>
                <button onClick={toggleSidebar} className="text-amber-500">
                  <FaShoppingBag />
                </button>
                <div className="relative flex-none">
                  <Sidebar
                    isSidebarVisible={isSidebarVisible}
                    closeSidebar={closeSidebar}
                  />
                </div>
              </div>
            </span>
            <button className="bg-amber-500 rounded-lg text-white w-[150px] h-12 hover:text-amber-500 hover:border-amber-500 hover:border-2 duration-200 hover:bg-transparent">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
