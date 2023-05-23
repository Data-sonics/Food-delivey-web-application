import { basketModel } from "../models/basketModel";

export const getBasket = async () => {
  const basket = await basketModel.find({}).populate(["userId", "foods"]);
  return basket;
};

export const getBasketById = async (id) => {
  return await basketModel.findById(id);
};

export const createBasket = async (basket) => {
  // console.log(basket);
  const userId = basket.userId;
  console.log("basket");
  if (userId) {
    const userBasket = await basketModel.findOne({ userId: userId });
    if (userBasket) {
      // console.log("user:", userBasket);
      let foods = [
        ...userBasket.foods,
        { foodsId: basket.productId, quantity: basket.quantity },
      ];
      console.log({
        ...userBasket,
        foods: foods,
      });
      return await basketModel.findOneAndUpdate(
        { userId: userId },
        {
          userId: userId,
          foods: foods,
        }
      );
    }
  }
  console.log("no user");
  return await basketModel.create({
    userId: userId,
    foods: [{ foodsId: basket.productId, quantity: basket.quantity }],
  });
};
// export const updateBasket = async (id, basket) => {
//   return await basketModel.findByIdAndUpdate(id, basket, { new: true });
// };

export const deleteBasket = async (id) => {
  return await basketModel.findByIdAndDelete(id);
};
