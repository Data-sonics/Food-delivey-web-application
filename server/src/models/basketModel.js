import mongoose from "mongoose";

export const FoodItem = {
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Foods" },
  quantity: { type: Number },
};

export const basket = {
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  foods: [FoodItem],
};

export const basketSchema = new mongoose.Schema(basket, { timestamps: true });

export const basketModel = mongoose.model("basket", basketSchema);
