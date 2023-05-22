import { foodsModel } from "../models/foodsModel.js";

export const getfoodById = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await foodsModel.findOne({ id: foodId });

    if (!food) {
      return res.status(404).json({ error: "food not found" });
    }

    res.json(food);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export async function deletefood(id) {
  const result = await foodsModel.findOneAndDelete({ id });
  return id;
}

export async function updatefood(food) {
  console.log("food:", food);
  const { id, ...updatingObj } = food;
  return await foodsModel.findOneAndUpdate({ id }, updatingObj, {
    new: true,
  });
}
