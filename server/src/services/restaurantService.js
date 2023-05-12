import { restaurantsModel } from "../models/restaurantsModel";

export async function getAllRestaurants() {
  return await restaurantsModel.find();
}

export async function addRestaurant(name) {
  const restaurant = new restaurantsModel({ name });
  return await restaurant.save();
}

export async function deleteRestaurant(id) {
  const result = await restaurantsModel.findByIdAndDelete(id);
  return id;
}

export async function updateRestaurant(id, name) {
  console.log(id, name);
  const restaurant = await restaurantsModel.findOne({ _id: id });
  restaurant.name = name;
  restaurant.updatedAt = Date.now();
  return await restaurant.save();
}
