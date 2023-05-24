import { basketModel } from "../models/basketModel";

export const getBasketByUserId = async (userId, populate) => {
  let basket = await basketModel.findOne({ userId });
  if (basket && populate) {
    await basket.populate(["userId", "foods.foodId"]);
  }
  if (!basket) {
    basket = await basketModel.create({ userId });
  }
  return basket;
};

export const getBasketById = async (id) => {
  return await basketModel.findById(id);
};

export const implementBasketItem = async (userId, foodId, quantity) => {
  let basket = await getBasketByUserId(userId);
  let { foods } = basket;
  // herev baigaa hooliig sagslah geed baival toog ni l nemne
  let updated = false;
  foods = foods.map((food) => {
    if (food.foodId.toString() === foodId) {
      food.quantity += quantity;
      updated = true;
    }
    return food;
  });
  if (!updated) {
    foods.push({ foodId, quantity });
  }
  basket = await basketModel.findOneAndUpdate(
    { _id: basket._id },
    { userId, foods }
  );

  return await getBasketByUserId(userId, true);
};

export const deleteBasket = async (id) => {
  return await basketModel.findByIdAndDelete(id);
};
