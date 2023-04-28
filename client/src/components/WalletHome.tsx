import { useEffect, useState } from "react";
import { api } from "../api";
import { WalletsList } from "./WalletsList";

export function Wallet() {
  const initialWallets: [
    {
      id: number;
      saldo: number;
    }
  ] = [
    {
      id: 0,
      saldo: 0,
    },
  ];

  const [wallets, updateWallets] = useState(initialWallets);

  useEffect(() => {
    api.get("/").then((data) => {
      updateWallets(data.data);
    });
  }, []);

  console.log(wallets);

  return (
    <div className="bg-gray-200 mx-20 my-10 rounded-md">
      <div className="p-10 flex justify-between">
        <h1 className="font-medium py-2 text-3xl text-[#175FAB]">
          <b>YES</b> BANK
        </h1>
        <button className="bg-green-700 px-2 rounded-md text-white">
          Adicionar conta
        </button>
      </div>

      <WalletsList wallets={wallets} />
    </div>
  );
}
