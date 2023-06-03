import express from "express";
import historyRouter from "./routes/history.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use("/history", historyRouter);
app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("connected");
});
