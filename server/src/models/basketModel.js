import mongoose from "mongoose";

const BasketItemSchema = new mongoose.Schema({
  foodsId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
  foodImage: { type: String },
  name: { type: String },
  price: { type: String },
  productId: { type: String },
  quantity: { type: Number },
});

const basketSchema = new mongoose.Schema(
  {
    userId: { type: String },
    foods: [BasketItemSchema],
  },
  { timestamps: true },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

basketSchema.virtual("user ", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

export const basketModel = mongoose.model("Basket", basketSchema);

// import mongoose from "mongoose";

// const basketSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//     },
//     foods: [
//       {
//         foodsId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
//         image: String,
//         quantity: Number,
//         name: String,
//         price: String,
//       },
//     ],
//   },
//   { timestamps: true }
// );

// basketSchema.virtual("user", {
//   ref: "User",
//   localField: "userId",
//   foreignField: "_id",
//   justOne: true,
// });

// export const BasketModel = mongoose.model("Basket", basketSchema);
