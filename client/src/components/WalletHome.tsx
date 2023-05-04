import { useEffect, useState } from "react";
import { api } from "../api";
import { WalletsList } from "./WalletsList";

export function Wallet() {
  type Wallets = {
    id: number;
    saldo: number;
  };

  const [wallets, updateWallets] = useState<Wallets[]>([]);

  useEffect(() => {
    api.get("/").then((data) => {
      updateWallets(data.data);
    });
    return;
  }, [wallets]);

  return (
    <div className="bg-gray-200 mx-20 my-10 rounded-md">
      <div className="p-10 flex justify-between">
        <h1 className="font-medium py-2 text-3xl text-[#175FAB]">
          <b>YES</b> BANK
        </h1>
        <button
          className="bg-green-700 px-2 rounded-md text-white"
          onClick={() => {
            const newValue = prompt("Insira o saldo da nova conta");
            api.post(`/${newValue}`).then(() => {
              updateWallets([
                ...wallets,
                { id: wallets.length + 1, saldo: Number(newValue) },
              ]);
            });
          }}
        >
          Adicionar Conta
        </button>
      </div>

      <WalletsList wallets={wallets} updateWallets={updateWallets} />
    </div>
  );
}
