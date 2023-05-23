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
