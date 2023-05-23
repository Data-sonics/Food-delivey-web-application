import express from "express";
import { foodsModel } from "../models/foodsModel.js";

import {
  deletefood,
  updatefood,
  getfoodById,
} from "../services/foodService.js";
const router = express.Router();

router.get("/", async (request, response) => {
  let myfoods = await foodsModel.find().populate("restaurant");
  let mytypes = await foodsModel.find().distinct("type");
  // console.log("types:", mytypes);
  response.json({
    data: myfoods,
    types: mytypes,
  });
});

router.post("", async (request, response) => {
  const body = request.body;
  const newfood = new foodsModel(body);
  const result = await newfood.save();
  response.json({
    data: result,
  });
});

router.get("/:id", getfoodById);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const food = await deletefood(id);
    res.json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const food = await updatefood({
      id,
      ...body,
    });
    res.json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
