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
    console.log("basketaaa:", basket);
    toast.success("Барааг амжилттай сагсаллаа");
  };

  const updateBasket = async (productId, quantity) => {
    if (!currentUser) {
      if (!basket) {
        console.log("basket is empty so created");
        return { items: [{ productId, quantity }] };
      }
      console.log("current:", currentUser);

      const newBasket = { items: [] };
      let { items } = basket;
      items = [...items];
      let updatedQuantity = false;
      console.log("items:", items);
      newBasket.items = items.map((item, index) => {
        if (item.productId === productId) {
          const newQuantity = item.quantity + quantity;
          updatedQuantity = true;
          return {
            productId: productId,
            quantity: newQuantity,
          };
        }
        console.log("itemuud:", items);
        return item;
      });
      console.log("newBasket:", newBasket);
      if (!updatedQuantity) {
        newBasket.items.push({ productId, quantity });
      }
      return newBasket;
    }

    const response = await axios.post("/api/basket", {
      productId,
      quantity,
      userId: currentUser._id,
    });
    console.log("response is:", response);
    return response.data;
  };
  return { basket, setBasket, addToBasket };
};
