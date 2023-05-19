import express, { json } from "express";
import cors from "cors";
import usersRouter from "./routers/usersRouter";
import userRolesRouter from "./routers/userRolesRouter";
import authRouter from "./routers/authRoter";
import filesRouter from "./routers/filesRouter";
import ordersRouter from "./routers/ordersRouter";
import basketRouter from "./routers/basketRouter";

export const app = express();
app.use(json());
app.use(cors());

app.use(authRouter);
app.use("/api/users", usersRouter);
app.use("/api/signIn", authRouter);
app.use("/api/userRoles", userRolesRouter);
app.use("/api/files", filesRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/basket", basketRouter);

export default app;
