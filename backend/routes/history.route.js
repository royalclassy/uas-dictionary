import { Router } from "express";
import {
  addHistory,
  deleteHistory,
  editHistory,
  getAllHistory,
} from "../database.js";

const historyRouter = Router();

historyRouter.post("/add", async (req, res) => {
  try {
    const { keyword, username } = req.body;
    const result = await addHistory(keyword, username);
    return res.send({ result });
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
});

historyRouter.post("/edit", async (req, res) => {
  try {
    const { historyID, newKeyword, username } = req.body;
    const result = await editHistory(historyID, newKeyword, username);
    console.log(result);
    return res.send({ result });
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
});

historyRouter.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const history = await getAllHistory(username);
    return res.send({ history });
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
});

historyRouter.delete("/:historyID", async (req, res) => {
  try {
    const { historyID } = req.params;
    const result = await deleteHistory(historyID);
    return res.send({ result });
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
});

export default historyRouter;
