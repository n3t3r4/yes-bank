type wallets = {
  id: number;
  saldo: number;
};

type walletsProps = {
  wallets: wallets[];
};

export function WalletsList({ wallets }: walletsProps) {
  return (
    <>
      <ul>
        {wallets.map((item) => {
          return (
            <>
              <div className="p-10 flex flex-col items-center border-t-2 border-solid border-white mx-10">
                <h1 className="font-bold">Conta Nº{item.id}</h1>
                <p>Saldo: R${item.saldo}</p>
                <input
                  className="m-5 p-2 rounded-md outline-none"
                  placeholder="Valor da compra"
                ></input>
                <div>
                  <button className="bg-green-700 p-2 mx-2 rounded-md text-white">
                    Realizar Compra
                  </button>
                  <button className="bg-red-700 p-2 rounded-md text-white">
                    Excluir Conta
                  </button>
                </div>
              </div>
            </>
          );
        })}
        ;
      </ul>
    </>
  );
}
