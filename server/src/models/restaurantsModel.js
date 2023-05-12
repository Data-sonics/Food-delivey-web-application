import mongoose from "mongoose";
import { nanoid } from "nanoid";
const restaurantSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => nanoid(),
  },
  imageUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  text: {
    type: String,
  },
});

export const restaurantsModel = mongoose.model("Restaurant", restaurantSchema);
