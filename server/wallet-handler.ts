import fs from "fs";

export function walletList() {
  const walletsList = fs.readdirSync("./src");
  const wallets = walletsList.map((item) => {
    return JSON.parse(fs.readFileSync(`./src/${item}`).toString());
  });
  /* console.log(wallets); */
  return wallets;
}

export function singleWallet(id: Number) {
  const readSingleWallet = fs.readFileSync(`./src/${id}.json`).toString();
  return readSingleWallet;
}

export function createWallet(saldo: number) {
  const id = fs.readdirSync("./src").length + 1;
  /* console.log(id); */

  const newWallet = fs.writeFileSync(
    `./src/${id}.json`,
    JSON.stringify(
      {
        id: id,
        saldo: saldo,
      },
      null,
      2
    )
  );
  return;
}

export function editWallet(id: Number, saldo: Number) {
  const readWallet = JSON.parse(fs.readFileSync(`./src/${id}.json`).toString());
  /* console.log(readWallet); */
  const newContent = {
    id: id,
    saldo: saldo,
  };
  const updatedWallet = { ...readWallet, ...newContent };
  fs.writeFileSync(`./src/${id}.json`, JSON.stringify(updatedWallet, null, 2));
}

export function deleteWallet(id: number) {
  fs.unlinkSync(`./src/${id}.json`);
}
