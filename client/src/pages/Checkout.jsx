import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundContext } from "../contexts/BackgroundProvider";

function FoodList() {
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
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleSubstract = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div>
      {foods.map((food) => (
        <div className="my-2">
          <div className="flex align-middle">
            <img src={food.respic} alt="" className="rounded-xl mb-5" />
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
                className=" flex items-center justify-center  border-2 p-1  text-amber-500 rounded-xl  group bg-amber-500  hover:text-white     "
              >
                <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                  -
                </span>
              </button>
              <input
                className="  rounded-lg  w-20 text-center  border-gray-200 border "
                defaultValue="1"
                type="number"
                min="0"
                value={quantity}
              />

              <button
                onClick={handleAdd}
                className=" flex items-center justify-center  border-2 p-1  text-amber-500 rounded-xl  group bg-amber-500  hover:text-white"
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
    </div>
  );
}

export default function Checkout() {
  const Number = 2;
  const { setColor } = useContext(BackgroundContext);
  setColor("bg-transparent");
  return (
    <section className="container mx-auto">
      <div className="text-center my-16 grid gap-10">
        <ol className="flex items-center justify-center">
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
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="#ffa500"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to="/restaurants"
                className="ml-1 text-sm font-medium text-gray-700 md:ml-2"
              >
                Restaurants
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="#ffa500"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to="/restaurants"
                className="ml-1 text-sm font-medium text-gray-700 md:ml-2"
              >
                Restaurants Card
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="#ffa500"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to="/restaurants"
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 "
              >
                Checkout
              </Link>
            </div>
          </li>
        </ol>
        <h1 className="text-5xl font-bold">Checkout</h1>
        <p className="text-md text-gray-500 font-thin">
          Sit amet nisl purus in mollis nunc sed id semper. Condimentum id
          venenatis a condimentum vitae sapien pellentesque.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-[10%]">
          <div className="w-[500px]">
            <div className="flex justify-between my-10">
              <h1 className="text-5xl font-bold">Your order:</h1>
              <p className="text-amber-500 text-5xl font-bold">{Number}</p>
            </div>
            <div>
              <FoodList />
            </div>
          </div>
          <div className="w-[636px] h-[1051px] rounded-lg shadow-2xl mt-5 mb-16">
            <div className="p-8">
              <div>
                <h1 className="text-2xl font-bold">Buyer information</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border h-14 ps-2 rounded-lg font-thin mt-4 focus:outline-0"
                  />
                  <div className="flex mt-5 gap-14">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14"
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
