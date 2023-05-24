import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

import { useBasket } from "../../hooks/useBasket";
import axios from "axios";
import { Card } from "./Card";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function CardTabs({ id }) {
  const { addToBasket } = useBasket();
  const [foods, setFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const types = ["breakfast", "lunch", "dinner"];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/restaurants/${id}/foods`)
      .then((response) => {
        setFoods(response.data);
        setIsLoad(false);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (foods.length > 0) {
      setSelectedFoods(foods.filter((food) => food.type === types[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foods]);

  const selectTabs = (type) => {
    const selected = foods.filter((food) => food.type === type);
    setSelectedFoods(selected);
  };
  return (
    !isLoad && (
      <div className="w-full container mx-auto my-20 ">
        <Tab.Group>
          <Tab.List className="flex gap-4 shadow-xl ">
            {types.map((genres, index) => (
              <Tab
                key={index}
                onClick={() => selectTabs(genres)}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5  font-medium     duration-300   text-amber-500   ",
                    "ring-white  ring-offset-2 ring-offset-amber-500  focus:outline-none focus:ring-2 uppercase",
                    selected
                      ? "bg-white shadow"
                      : "text-black/50   hover:bg-dark hover:text-amber-500"
                  )
                }
              >
                {genres}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 p-10">
            {types.map((type, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3  ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
                )}
              >
                <ul className="flex gap-10 flex-wrap focus:outline-0 ">
                  {selectedFoods?.map((food) => {
                    return (
                      <li key={food.id}>
                        <Card addToBasket={addToBasket} food={food} />
                      </li>
                    );
                  })}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    )
  );
}
export default CardTabs;
