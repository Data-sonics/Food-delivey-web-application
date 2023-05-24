import express from "express";
import {
  getBasketByUserId,
  implementBasketItem,
  deleteBasket,
} from "../services/basketService";
import verifyToken from "../middlewares/verifyToken";

const basketRouter = express.Router();

basketRouter.get("/", verifyToken, async (req, res) => {
  res.json(await getBasketByUserId(req.user._id, true));
});

basketRouter.post("/", verifyToken, async (req, res) => {
  const { foodId, quantity } = req.body;
  res.json(await implementBasketItem(req.user._id, foodId, quantity));
});

basketRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteBasket(id));
});

export default basketRouter;
