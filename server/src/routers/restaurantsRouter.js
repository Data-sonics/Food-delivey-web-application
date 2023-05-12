import express from "express";
import bodyParser from "body-parser";
import {
  getAllRestaurants,
  addRestaurant,
  deleteRestaurant,
  updateRestaurant,
} from "../services/restaurantService.js";

const router = express.Router();

router.use(bodyParser.json());

// Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await getAllRestaurants();
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Add a new restaurant
router.post("/", async (req, res) => {
  const { name } = req.body;
  console.log(name);
  try {
    const restaurant = await addRestaurant(name);
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a restaurant
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await deleteRestaurant(id);
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update a restaurant
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const restaurant = await updateRestaurant(id, name);
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
