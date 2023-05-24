import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { toast } from "react-toastify";

export const Card = ({ food, addToBasket }) => {
  const [info, setInfo] = useState(false);

  useEffect(() => {
    console.log("food:", food);
  }, []);
  const [quantity, setQuantity] = useState(1);
  const updateProductCount = (count) => {
    if (count < 0 && quantity === 1) {
      toast.warning("1 ээс бага бараа сагслах боломжгүй");
      return;
    }
    if (count > 0 && quantity === 10) {
      toast.warning("10 аас их бараа сагслах боломжгүй");
      return;
    }
    setQuantity(quantity + count);
  };
  return (
    <div
      className="w-full  max-w-md  rounded-lg border border-gray-200 bg-white shadow"
      data-aos="flip-up"
    >
      <img className="rounded-t-lg p-8" src={food.foodimg} alt="" />

      {/* front */}
      <div
        className="px-10 py-10 "
        style={{ display: info ? "none" : "block" }}
      >
        <h5 className="text-4xl font-semibold mb-2 tracking-tight text-gray-900">
          {food.name}
        </h5>

        <hr />
        <div className="my-5 flex gap-2 justify-between items-center ">
          <p className="text-3xl font-bold text-gray-900">₮{food.price}</p>
          <div className="flex gap-2 ">
            <button
              className="group flex items-center  justify-center rounded-lg border bg-amber-500  p-1 text-amber-500  hover:text-white"
              onClick={() => updateProductCount(-1)}
            >
              <span className="relative rounded-md bg-white   px-5 py-2.5  duration-300 group-hover:bg-opacity-0">
                -
              </span>
            </button>
            <input
              className="  w-20  rounded-lg border  border-gray-200 text-center "
              type="number"
              name="quantity"
              value={quantity}
              readOnly={true}
            />

            <button
              className=" group flex items-center  justify-center rounded-lg       border bg-amber-500  p-1 text-amber-500  hover:text-white"
              onClick={() => updateProductCount(1)}
            >
              <span className="relative rounded-md bg-white   px-5 py-2.5  duration-300 group-hover:bg-opacity-0">
                +
              </span>
            </button>
          </div>
          <button>
            <AiOutlineInfoCircle
              size={30}
              className=" fill-amber-500   "
              onClick={() => setInfo(true)}
            />
          </button>
        </div>

        <p>
          <button
            onClick={() => addToBasket(food._id, quantity)}
            className="hover:bg-transparent w-full rounded-lg bg-amber-500 p-2  text-white duration-300 hover:border-2 hover:border-amber-500 hover:bg-white hover:text-amber-500"
          >
            purchase
          </button>
        </p>
      </div>

      {/* back */}
      <div className="px-10 py-10" style={{ display: info ? "block" : "none" }}>
        <div className="flex justify-end">
          <button className="" onClick={() => setInfo(false)}>
            <AiOutlineClose className="fill-amber-500 " size={30} />
          </button>
        </div>
        <h5 className="text-4xl font-semibold tracking-tight text-gray-900">
          Potatoes with pork and dried fruits
        </h5>

        <div className="   my-5"></div>
        <div className="text-lg ">
          <p className="my-2 text-gray-400 ">{food.description}</p>
        </div>
      </div>
    </div>
  );
};
