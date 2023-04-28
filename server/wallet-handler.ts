import fs from "fs";

export function walletList() {
  const walletsList = fs.readdirSync("./src");
  const wallets = walletsList.map((item) => {
    return JSON.parse(fs.readFileSync(`./src/${item}`).toString());
  });
  console.log(wallets);
  return wallets;
}
