import { Router } from "express";
import { loginUser, registerUser } from "../services/authService";
import verifyToken from "../middlewares/verifyToken";
const authRouter = Router();

authRouter.post("/api/register", async (req, res) => {
  const { email, password, repassword, phone, name } = req.body;

  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Password таарахгүй байнав" });
  }
  try {
    await registerUser({ email, password, phone, name });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
  return res
    .status(200)
    .json({ success: true, message: "Register successful" });
});

authRouter.post("/api/signIn", async (req, res) => {
  const { email, password } = req.body;
  const response = await loginUser({ email, password });
  res.status(response.status).json(response);
});

authRouter.get("/api/currentUser", verifyToken, async (req, res) => {
  console.log(req.user);
  return await res.status(200).json(req.user);
});

export default authRouter;
