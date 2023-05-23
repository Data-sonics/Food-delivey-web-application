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
  res.json(await getBasket());
});

// basketRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   res.json(await getBasketById(id));
// });

basketRouter.post("/", async (req, res) => {
  const basket = req.body;
  console.log("basket", basket);
  res.json(await createBasket(basket));
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
