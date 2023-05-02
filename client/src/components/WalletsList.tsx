import { useState } from "react";
import { api } from "../api";

type wallets = {
  id: number;
  saldo: number;
};

type walletsProps = {
  wallets: wallets[];
};

export function WalletsList({ wallets }: walletsProps) {
  const [walletsShare, setWallets] = useState(wallets);
  let compra: number;
  return (
    <>
      <ul>
        {wallets
          .map((item) => {
            return (
              <>
                <div className="p-10 flex flex-col items-center border-t-2 border-solid border-white mx-10">
                  <h1 className="font-bold">Conta Nº{item.id}</h1>
                  <p>Saldo: R${item.saldo}</p>
                  <input
                    className="m-5 p-2 rounded-md outline-none"
                    placeholder="Valor da compra"
                    onChange={(data) => {
                      compra = Number(data.target.value);
                    }}
                  ></input>
                  <div>
                    <button
                      className="bg-green-700 p-2 mx-2 rounded-md text-white"
                      onClick={() => {
                        api
                          .patch(`/${item.id}&${item.saldo - compra}`)
                          .then(() => {
                            window.location.reload();
                          });
                      }}
                    >
                      Realizar Compra
                    </button>
                    <button
                      className="bg-red-700 p-2 rounded-md text-white"
                      onClick={() => {
                        api.delete(`/${item.id}`).then(() => {
                          window.location.reload();
                        });
                      }}
                    >
                      Excluir Conta
                    </button>
                  </div>
                </div>
              </>
            );
          })
          .reverse()}
      </ul>
    </>
  );
}
