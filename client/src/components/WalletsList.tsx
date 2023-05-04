import { Fragment, useState } from "react";
import { api } from "../api";

type wallets = {
  id: number;
  saldo: number;
};

type walletsProps = {
  wallets: wallets[];
  updateWallets: React.Dispatch<React.SetStateAction<wallets[]>>;
};

export function WalletsList({ wallets, updateWallets }: walletsProps) {
  const [valorCompra, setValorCompra] = useState(0);

  async function setWallets(id: number, saldo: number, subtrair: number) {
    const { data } = await api.patch(`/?id=${id}&saldo=${saldo - subtrair}`);
    updateWallets(data);
  }
  async function deleteWallets(id: number) {
    const { data } = await api.delete(`/${id}`);
    updateWallets(data);
  }

  return (
    <Fragment>
      <ul>
        {wallets &&
          wallets
            .map((item) => {
              return (
                <Fragment key={item.id}>
                  <div className="p-10 flex flex-col items-center border-t-2 border-solid border-white mx-10">
                    <h1 className="font-bold">Conta Nº{item.id}</h1>
                    <p>Saldo: R${item.saldo}</p>
                    <input
                      className="m-5 p-2 rounded-md outline-none"
                      placeholder="Valor da compra"
                      onChange={(data) => {
                        setValorCompra(Number(data.target.value));
                      }}
                    ></input>
                    <div>
                      <button
                        className="bg-green-700 p-2 mx-2 rounded-md text-white"
                        onClick={() => {
                          setWallets(item.id, item.saldo, valorCompra);
                        }}
                      >
                        Realizar Compra
                      </button>
                      <button
                        className="bg-red-700 p-2 rounded-md text-white"
                        onClick={() => {
                          deleteWallets(item.id);
                        }}
                      >
                        Excluir Conta
                      </button>
                    </div>
                  </div>
                </Fragment>
              );
            })
            .reverse()}
      </ul>
    </Fragment>
  );
}
