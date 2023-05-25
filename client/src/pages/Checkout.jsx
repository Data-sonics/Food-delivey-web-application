import { useContext } from "react";
import { Link } from "react-router-dom";
import { BackgroundContext } from "../contexts/BackgroundProvider";

import { Tab } from "@headlessui/react";
import Banks from "../components/icon/Banks";
import ChevronRight from "../components/icon/ChevronRight";
import Disctrict from "../components/checkout/Disctrict";
import FoodList from "../components/home/FoodList";

export default function Checkout() {
  const { setColor } = useContext(BackgroundContext);
  setColor("bg-transparent");
  return (
    <section className="container mx-auto">
      <div className="text-center my-16 grid gap-10">
        <ol className="flex items-center justify-center" data-aos="fade-up">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-amber-500 "
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight />
              <Link
                to="/restaurants"
                className=" text-sm font-medium text-gray-700 "
              >
                Restaurants
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight />
              <Link
                to="/restaurants"
                className=" text-sm font-medium text-gray-500  dark:text-gray-400 "
              >
                Check Out
              </Link>
            </div>
          </li>
        </ol>
        <h1 className="text-5xl font-bold" data-aos="fade-up">
          Check Out
        </h1>
        <p className="text-md text-gray-500 font-thin" data-aos="fade-up">
          Sit amet nisl purus in mollis nunc sed id semper. Condimentum id
          venenatis a condimentum vitae sapien pellentesque.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-[10%] flex-wrap">
          <div className="w-[500px]" data-aos="flip-down">
            <div className="flex justify-between my-10">
              <h1 className="text-5xl font-bold">Your order</h1>
            </div>
            <div className="mb-16">
              <FoodList />
            </div>
          </div>
          <div
            className="w-[636px] rounded-lg shadow-2xl mt-5 mb-16"
            data-aos="flip-down"
          >
            <div className="p-8">
              <div>
                <h1 className="text-2xl font-bold">Buyer information</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border h-14 ps-2 rounded-lg font-thin mt-4 focus:outline-0 border-gray-400"
                  />
                  <div className="flex mt-5 gap-10  ">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-80 h-14 border-gray-400"
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14 border-gray-400"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mt-7 mb-4">
                    Delivery address
                  </h1>
                  <Disctrict />
                  <input
                    type="text"
                    placeholder="Street"
                    className="rounded-lg font-thin focus:outline-0 border ps-2 border-gray-400 w-full h-14 mt-4"
                  />
                  <div className="flex mt-5 gap-10  ">
                    <input
                      type="text"
                      placeholder="House number"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-80 h-14 border-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Apartment number"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14 border-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold pt-5 mb-2">
                    Payment method
                  </h1>
                  <Tab.Group>
                    <Tab.List className={"text-xl font-extrabold"}>
                      <Tab
                        className={
                          "hover:text-amber-500 duration-300 ps-10 active:ring-white outline-none"
                        }
                      >
                        Card
                      </Tab>
                      <Tab
                        className={
                          "hover:text-amber-500 duration-300 ps-10 outline-none"
                        }
                      >
                        Cash
                      </Tab>
                    </Tab.List>
                    <Tab.Panels>
                      <Tab.Panel>
                        <Banks />
                        <input
                          type="number"
                          placeholder="Card number"
                          className="rounded-lg font-thin focus:outline-0 border ps-2 w-full mt-2 h-14 border-gray-400"
                        />
                        <div className="flex mt-5 gap-10  ">
                          <input
                            type="number"
                            placeholder="Expiration Date"
                            className="rounded-lg font-thin focus:outline-0 border ps-2 w-80 h-14 border-gray-400"
                          />
                          <input
                            type="number"
                            placeholder="CVV"
                            className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14 border-gray-400"
                          />
                        </div>
                        <button className="bg-amber-500 w-full h-14 rounded-lg text-white hover:bg-transparent hover:border-2 border-amber-500 hover:text-amber-500 duration-300 font-thin mt-6">
                          Send
                        </button>
                      </Tab.Panel>
                      <Tab.Panel>
                        <button className="bg-amber-500 w-full h-14 rounded-lg text-white hover:bg-transparent hover:border-2 border-amber-500 hover:text-amber-500 duration-300 font-thin mt-16">
                          Send
                        </button>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
