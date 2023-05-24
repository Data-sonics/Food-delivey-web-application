import React from "react";
import FoodList from "./FoodList";

function Sidebar({ isSidebarVisible, closeSidebar }) {
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
          <FoodList />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
