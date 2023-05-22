import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
const RestaurantSchema = new mongoose.Schema({
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
  rating: {
    type: Number,
  },
  logo: {
    type: String,
  },
  type: {
    type: String,
  },
  coverimg: {
    type: String,
  },
});
export const restaurantsModel = mongoose.model("Restaurant", RestaurantSchema);
