import mongoose from "mongoose";

export const basket = {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: String,
      quantity: Number,
      name: String,
      price: String,
    },
  ],
};

export const basketSchema = new mongoose.Schema(basket, { timestamps: true });
export const basketModel = mongoose.model("basket", basketSchema);
