import express from "express";
import {
  getNavTitle,
  getNavTitleById,
  createNavTitle,
  deleteNavTitle,
} from "../services/navTitleService";

const navTitleRouter = express.Router();

navTitleRouter.get("/", async (req, res) => {
  res.json(await getNavTitle());
});

navTitleRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getNavTitleById(id));
});

navTitleRouter.post("/", async (req, res) => {
  const basket = req.body;
  res.json(await createNavTitle(basket));
});

navTitleRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteNavTitle(id));
});

export default navTitleRouter;
