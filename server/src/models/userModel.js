import mongoose from "mongoose";

export const User = {
  imageUrl: String,

  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: mongoose.Types.ObjectId,
    ref: "UserRole",
  },
  roles: {
    type: [mongoose.Types.ObjectId],
    ref: "UserRole",
  },

  password: String,

  isAdmin: { type: Boolean, default: false },
};

export const userSchema = new mongoose.Schema(User, { timestamps: true });
export const userModel = mongoose.model("User", userSchema);
