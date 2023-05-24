<<<<<<< HEAD
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
=======
const Basket = require("./entities/basket.entity");
import {foodService} from "./foodService"

class BasketsService {
  baskets = [];
 foodService = new foodService();

  findMain = async (userId) => {
    let mainBasket = this.baskets.find(
      (basket) => basket.userId === userId && basket.isMain
    );
    if (!mainBasket) {
      mainBasket = await this.createNewMain(userId);
    }
    return mainBasket;
  };

  createNewMain = async (userId) => {
    const newBasket = new Basket(userId, true);
    this.baskets.push(newBasket);
    return newBasket;
  };

  addProduct = async (userId, productId, quantity) => {
    const mainBasket = await this.findMain(userId);
    const product = this foodService.findOne(productId);
    if (!product) {
      throw new BadRequestException("Product not found!");
    }

    let updatedQuantity = false;

    if (!mainBasket.items) {
      mainBasket.items = [{ productId, quantity }];
    } else {
      mainBasket.items = mainBasket.items.map((item) => {
        if (item.productId === productId) {
          item.quantity += quantity;
          updatedQuantity = true;
        }
        return item;
      });
      if (!updatedQuantity) {
        mainBasket.items.push({ productId, quantity });
      }
    }

    return mainBasket;
  };
}

module.exports = BasketsService;
>>>>>>> 22b75df44b3225888ff2bcb195723c26f5070b13
