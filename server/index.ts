import express from "express";
import { Request, Response } from "express";
import {
  createWallet,
  deleteWallet,
  editWallet,
  singleWallet,
  walletList,
} from "./wallet-handler";
let cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const walletsList = walletList();
  res.json(walletsList);
});

app.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const wallet = singleWallet(id);
  res.json(wallet);
});

app.post("/:saldo", (req: Request, res: Response) => {
  const saldo = Number(req.params.saldo);
  createWallet(saldo);
  res.end();
});

app.patch("/", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const saldo = Number(req.params.saldo);

  const idQuery = Number(req.query.id);
  const saldoQuery = Number(req.query.saldo);

  editWallet(idQuery, saldoQuery);
  res.end();
});

app.delete("/:id", (req: Request, res: Response) => {
  const walletId = Number(req.params.id);
  deleteWallet(walletId);
  res.end();
});

app.listen(3030, () => {
  console.log("server running");
});
