import "./App.css";
import { AppBar } from "./components/AppBar";
import { Wallet } from "./components/WalletHome";

function App() {
  return (
    <>
      <AppBar />
      <div className="bg-[#175FAB] h-[100%] w-[100%] fixed overflow-scroll pb-14">
        <Wallet />
      </div>
    </>
  );
}

export default App;
