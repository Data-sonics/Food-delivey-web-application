import mongoose from "mongoose";

export const navTitle = {
  title: { type: String, required: true },
  to: {type: String, required: true ,unique: true },
};
export const navTitleSchema = new mongoose.Schema(navTitle, { timestamps: true });
export const navTitleModel = mongoose.model("navTitle",navTitleSchema );
