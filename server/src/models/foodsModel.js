import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
const FoodSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: () => uuid(),
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    foodimg: {
      type: String,
    },
    restaurantId: {
      type: String,
    },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

FoodSchema.virtual("restaurant", {
  ref: "Restaurant",
  localField: "restaurantId",
  foreignField: "id",
  justOne: true,
});

export const foodsModel = mongoose.model("Foods", FoodSchema);
