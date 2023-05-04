import mongoose from "mongoose";

const User = {
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: String,
};

export const userSchema = new mongoose.Schema(User);
export const userModel = mongoose.model("User", userSchema);
