import Logo from "../logo/Logo";
import { FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const topchoices = ["Home", "About us", "Restaurants", "Pages", "Contacts"];
  return (
    <nav className="bg-gradient">
      <div className="container mx-auto py-4">
        <div className="flex justify-evenly cursor-pointer">
          <Logo />
          <div className="items-center flex justify-between w-full">
            <ul className="flex ms-16 font-thin p-4 md:p-0rounded-lg  mt-0 border-0 space-x-8 text-xl">
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
            <span className="text-amber-500 mt-4 mx-10">
              <FaShoppingBag />
            </span>
            <button className="bg-amber-500 rounded-lg text-white w-[150px] h-12 hover:bg-white hover:text-amber-500 hover:border-amber-500 hover:border-2 duration-200">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
