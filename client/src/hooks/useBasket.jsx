import axios from "axios";
import { toast } from "react-toastify";
// import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useState } from "react";
import useCurrentUser from "./useCurrentUser";

export const useBasket = () => {
  const [basket, setBasket] = useState("");

  useEffect(() => {
    console.log("basket: ", basket);
  }, [basket]);

  const { currentUser } = useCurrentUser();

  const addToBasket = async (foodId, quantity) => {
    if (quantity > 10) {
      toast.warn("Та 10 аас дээш бараа сагслаж болохгүй");
      return;
    }
    if (quantity < 0) {
      toast.warn("Та дор хаяж 1 бараа сагслах ёстой");
      return;
    }

    const basket = await updateBasket(foodId, quantity);
    setBasket(basket);
    toast.success("Барааг амжилттай сагсаллаа");
  };

  const updateBasket = async (foodId, quantity) => {
    if (!currentUser) {
      if (!basket) {
        console.log("basket is empty so created");
        return { items: [{ foodId, quantity }] };
      }
      console.log("current:", currentUser);

      const newBasket = { items: [] };
      let { items } = basket;
      items = [...items];
      let updatedQuantity = false;
      newBasket.items = items.map((item, index) => {
        if (item.foodId.toString() === foodId) {
          const newQuantity = item.quantity + quantity;
          updatedQuantity = true;
          return {
            foodId: foodId,
            quantity: newQuantity,
          };
        }
        return item;
      });
      if (!updatedQuantity) {
        newBasket.items.push({ foodId, quantity });
      }
      return newBasket;
    }

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/basket`,
      {
        foodId,
        quantity,
      }
    );
    console.log("response is:", response);
    return response.data;
  };
  return { basket, setBasket, addToBasket };
};
