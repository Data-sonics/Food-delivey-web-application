import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const basketContext = createContext(null);

const BasketProvider = ({ children }) => {
  const [basketQuantity, setbasketQuantity] = useState(0);

  useEffect(() => {
    axios
      .get("/api/basket")
      .then((res) => {
        let quantity = 0;
        const totalPriceArray = res.data.foods.map((food) => {
          quantity += Number(food.quantity);
          return quantity;
        });

        // Calculate the sum of all the individual total prices
        const totalSum = totalPriceArray.reduce((acc, curr) => acc + curr, 0);
        setbasketQuantity(totalSum);
      })
      .catch((err) => {
        console.log("Not signed in", err);
      });
  }, []);

  return (
    <basketContext.Provider value={{ basketQuantity, setbasketQuantity }}>
      {children}
    </basketContext.Provider>
  );
};

export default BasketProvider;
