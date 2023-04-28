import "./App.css";
import { AppBar } from "./components/AppBar";
import { Wallet } from "./components/WalletHome";

function App() {
  return (
    <>
      <AppBar />
      <body className="bg-[#175FAB] h-[100%] w-[100%] fixed overflow-scroll pb-14">
        <Wallet />
      </body>
    </>
  );
}

export default App;
