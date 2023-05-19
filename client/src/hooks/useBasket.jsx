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

  const addToBasket = async (productId, quantity) => {
    if (quantity > 10) {
      toast.warn("Та 10 аас дээш бараа сагслаж болохгүй");
      return;
    }
    if (quantity < 0) {
      toast.warn("Та дор хаяж 1 бараа сагслах ёстой");
      return;
    }

    const basket = await updateBasket(productId, quantity);
    setBasket(basket);
    toast.success("Барааг амжилттай сагсаллаа");
  };

  const updateBasket = async (productId, quantity) => {
    if (!currentUser) {
      if (!basket) {
        console.log("basket is empty so created");
        return { items: [{ productId, quantity }] };
      }

      const newBasket = { items: [] };
      let { items } = basket;
      items = [...items];
      let updatedQuantity = false;

      newBasket.items = items.map((item, index) => {
        if (item.productId === productId) {
          const newQuantity = item.quantity + quantity;
          updatedQuantity = true;
          return {
            productId: productId,
            quantity: newQuantity,
          };
        }
        return item;
      });
      console.log("newBasket:", newBasket);
      if (!updatedQuantity) {
        newBasket.items.push({ productId, quantity });
      }
      return newBasket;
    }
    const response = await axios.post("/baskets/add", {
      productId,
      quantity,
    });
    console.log("response is:", response);
    return response.data;
  };
  return { basket, setBasket, addToBasket };
};
