import React from "react";
import { FaClosedCaptioning } from "react-icons/fa";

function Sidebar({ toggleSidebar, closeSidebar }) {
  return (
    <div className="relative">
      <div
        id="hs-overlay-right"
        className={`hs-overlay hs-overlay-open:translate-x-0  ${
          !toggleSidebar ? "open" : "hidden"
        }translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700 `}
        tabindex="-1"
      >
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 class="font-bold text-gray-800 dark:text-white">
            Offcanvas title
          </h3>
          <button
            type="button"
            onClick={closeSidebar}
            class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-hs-overlay="#hs-overlay-right"
          >
            <FaClosedCaptioning />
          </button>
        </div>
        <div class="p-4">
          <p class="text-gray-800 dark:text-gray-400">
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

// import React from "react";
// import FoodList from "./FoodList";

// function Sidebar({ isSidebarVisible, closeSidebar }) {
//   const foods = [
//     {
//       id: 1,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-1.png",
//       foodname: "Pasta,kiwi and sauce chilli",
//       price: "$13",
//       quantity: 1,
//     },
//     {
//       id: 2,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-2.png",
//       foodname: "Rice with shrimps and kiwi",
//       price: "$12",
//       quantity: 1,
//     },
//     {
//       id: 3,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-1.png",
//       foodname: "Pasta,kiwi and sauce chilli",
//       price: "$13",
//       quantity: 1,
//     },
//     {
//       id: 4,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-2.png",
//       foodname: "Rice with shrimps and kiwi",
//       price: "$12",
//       quantity: 1,
//     },
//     {
//       id: 5,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-1.png",
//       foodname: "Pasta,kiwi and sauce chilli",
//       price: "$13",
//       quantity: 1,
//     },
//     {
//       id: 6,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-2.png",
//       foodname: "Rice with shrimps and kiwi",
//       price: "$12",
//       quantity: 1,
//     },
//     {
//       id: 7,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-1.png",
//       foodname: "Pasta,kiwi and sauce chilli",
//       price: "$13",
//       quantity: 1,
//     },
//     {
//       id: 8,
//       foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-2.png",
//       foodname: "Rice with shrimps and kiwi",
//       price: "$12",
//       quantity: 1,
//     },
//   ];
//   return (
//     <div
//       className={`fixed p-10  top-0 right-0 h-full  bg-white transform ${
//         isSidebarVisible ? "translate-x-0" : "translate-x-full"
//       } transition-all duration-700 z-10`}
//     >
//       <div className="flex justify-between ">
//         <div className="text-5xl font-bold">My Orders</div>
//         <div>
//           <button className="text-5xl" onClick={closeSidebar}>
//             ×
//           </button>
//         </div>
//       </div>
//       <div>
//         <div className="container relative mx-auto">
//           <FoodList foods={foods} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
