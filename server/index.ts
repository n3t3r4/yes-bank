import express from "express";
import { Request, Response } from "express";
import { walletList } from "./wallet-handler";
let cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const walletsList = walletList();
  res.json(walletsList);
});

app.listen(3030, () => {
  console.log("server running");
});
