import mongoose from "mongoose";

export const basket = {
  userId: {
    type: String,
  },

  foods: [
    {
      foodsId: { type: String, ref: "Food" },
      Image: String,
      quantity: Number,
      name: String,
      price: String,
    },
  ],
};

export const basketSchema = new mongoose.Schema(
  basket,
  { timestamps: true },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);
basketSchema.virtual("users", {
  ref: "User",
  localField: "userId",
  foreignField: "id",
  justOne: true,
});

export const basketModel = mongoose.model("basket", basketSchema);
