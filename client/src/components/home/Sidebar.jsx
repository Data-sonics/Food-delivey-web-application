import React from "react";
import FoodList from "./FoodList";

function Sidebar({ isSidebarVisible, closeSidebar }) {
  const foods = [
    {
      id: 1,
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
      className={`fixed p-10  top-0 right-0 w-[35%] h-full  bg-white transform ${
        isSidebarVisible ? "translate-x-0" : "translate-x-full"
      } transition-all duration-700 z-10`}
    >
      <div className="flex justify-between ">
        <div className="text-5xl font-bold">My Orders</div>
        <div>
          <button className="text-5xl" onClick={closeSidebar}>
            ×
          </button>
        </div>
      </div>
      <div>
        <div className="container relative mx-auto">
          <FoodList foods={foods} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
