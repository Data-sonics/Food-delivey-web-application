import { navTitleModel } from "../models/navTitleModel";

export const getNavTitle = async () => {
  const navTitle = await navTitleModel.find({});
  return navTitle;
};

export const getNavTitleById = async (id) => {
  return await navTitleModel.findById(id);
};

export const createNavTitle = async (title) => {
  console.log(title);
  return await navTitleModel.create(title);
};

export const updateNavTitle = async (id, title) => {
  return await navTitleModel.findByIdAndUpdate(id, title, { new: true });
};

export const deleteNavTitle = async (id) => {
  return await navTitleModel.findByIdAndDelete(id);
};
