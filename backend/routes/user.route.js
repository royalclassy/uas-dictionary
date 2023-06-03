import { Router } from "express";
import { userLogin, userRegister } from "../database.js";

const userRouter = Router();

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await userLogin(username);

  if (!result) {
    return res
      .status(400)
      .send({ message: "Account can't be found", status: false });
  }

  if (result.password === password) {
    return res.send({ message: "Login Succesfully", status: true });
  }

  return res.send({ message: "Password invalid!", status: false });
});

userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const result = await userRegister(username, password);
  if (result.status) {
    return res.send({
      username,
      message: "Account succesfully created",
      status: true,
    });
  }
  return res.send(result);
});

export default userRouter;
