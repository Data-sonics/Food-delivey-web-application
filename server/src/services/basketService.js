import { basketModel } from "../models/basketModel";

export const getBasket = async () => {
  const basket = await basketModel.find({});
  return basket;
};

export const getBasketById = async (id) => {
  return await basketModel.findById(id);
};

export const createBasket = async (basket) => {
  console.log(basket);
  return await basketModel.create(basket);
};

// export const updateBasket = async (id, basket) => {
//   return await basketModel.findByIdAndUpdate(id, basket, { new: true });
// };

export const deleteBasket = async (id) => {
  return await basketModel.findByIdAndDelete(id);
};
