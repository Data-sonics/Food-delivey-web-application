import React, { useState } from "react";
import { useCrud } from "hooks/useCrud";

const Restaurant = () => {
  const [name, setName] = useState("");
  const {
    createItem,
    deleteItem,
    updateItem,
    items: categories,
  } = useCrud("api/restaurants");
  return (
    <div className="p-4">
      <div className="mb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createItem({ name: name });
          }}
        >
          <label htmlFor="category-name" className="mb-1 block font-medium">
            Restaurant Name
          </label>
          <div className="flex gap-x-1">
            <div className="flex">
              <input
                type="text"
                id="category-name"
                className="mr-2 w-96 rounded border border-gray-400 p-2"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <button
              className="rounded bg-amber-500 px-4 py-2 text-white"
              type="submit"
            >
              Add Restaurants
            </button>
          </div>
        </form>
      </div>
      <ul className="list-inside list-disc">
        {categories.map((category, index) => (
          <li
            key={index}
            className="mb-2 list-none font-extrabold text-amber-500"
          >
            <div className="flex items-center">
              <input
                type="text"
                className="out outline- mr-2 flex-1 rounded border border-gray-400 p-2"
                value={category.name}
                onClick={() => updateItem()}
              />
              <button
                className="rounded bg-red-500 px-4 py-2 text-white"
                onClick={() => deleteItem(category._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
