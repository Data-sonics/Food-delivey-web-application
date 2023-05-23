import express from "express";
import {
  getBasket,
  getBasketById,
  createBasket,
  updateBasket,
  deleteBasket,
} from "../services/basketService";

const basketRouter = express.Router();

basketRouter.get("/", async (req, res) => {
  const user = req.currentUser;
  const result = await findOne(user);
  res.json(result);
});

basketRouter.post("/", async (req, res) => {
  const user = req.currentUser;
  const { productId, quantity } = req.body;
  const result = addProduct(user, productId, quantity);
  res.json(await result);
});

basketRouter.get("/", async (req, res) => {
  res.json(await getBasket());
});

// basketRouter.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const basket = req.body;
//   res.json(await updateBasket(id, basket));
// });

basketRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteBasket(id));
});

export default basketRouter;
