import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/basket`)
      .then((res) => {
        const { foods } = res.data;
        console.log("res", foods);
        setFoods(foods);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  console.log("foods is: ", foods);
  const totalPriceArray = foods.map((food) => {
    let totalPrice = 0;

    totalPrice += Number(food.foodId.price);
    return totalPrice;
  });

  // Calculate the sum of all the individual total prices
  const totalSum = totalPriceArray.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      {foods.map((food) => (
        <div className="my-5 grid gap-3 " key={food.foodId.id}>
          <div className="flex items-center gap-5">
            <img
              src={food.foodId.foodimg}
              alt=""
              className="w-32 rounded-lg cover "
            />
            <p className="font-bold text-2xl   ">{food.foodId.name}</p>
          </div>
          <div className="flex justify-between text-gray-400 font-thin">
            <p>Price</p>
            <p>Quantity</p>
          </div>
          <div className="flex  justify-between">
            <div className="text-4xl font-bold">₮ {food.foodId.price}</div>
            <div className="flex gap-2 ">
              <input
                className="  rounded-lg  w-20 text-center  border-amber-500 focus:outline-none border "
                type="number"
                value={food.quantity}
                readOnly={true}
              />
            </div>
          </div>

          <hr />
        </div>
      ))}
      <div className="flex justify-between mt-5">
        <p className="text-gray-400 font-thin pt-1">Total order:</p>
        <p className="text-3xl font-bold">${totalSum}</p>
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-gray-400 font-thin pt-1">To pay</p>
        <p className="text-5xl text-amber-500 font-bold">{totalSum}</p>
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-amber-500 rounded-xl w-[100%] h-12 text-white font-thin">
          <Link to="/checkout">Checkout</Link>
        </button>
      </div>
    </div>
  );
}

export default FoodList;
