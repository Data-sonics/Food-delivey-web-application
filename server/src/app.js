import express, { json } from "express";
import cors from "cors";
import usersRouter from "./routers/usersRouter";
import userRolesRouter from "./routers/userRolesRouter";
import authRouter from "./routers/authRouter";
import filesRouter from "./routers/filesRouter";
import ordersRouter from "./routers/ordersRouter";
import restaurantsRouter from "./routers/restaurantsRouter";
import foodsRouter from "./routers/foodsRouter";
import basketRouter from "./routers/basketRouter";
import navTitleRouter from "./routers/NavTitleRouter";

export const app = express();
app.use(json());
app.use(cors());

app.use(authRouter);
app.use("/api/users", usersRouter);
app.use("/api/signIn", authRouter);
app.use("/api/userRoles", userRolesRouter);
app.use("/api/files", filesRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/restaurants", restaurantsRouter);
app.use("/api/foods", foodsRouter);
app.use("/api/basket", basketRouter);
app.use("/api/navtitle", navTitleRouter);

export default app;
