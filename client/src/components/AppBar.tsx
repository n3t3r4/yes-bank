import Logo from "../../src/bank-logo.png";
import "../App.css";

export function AppBar() {
  return (
    <div className="bg-blue-100 shadow-lg flex justify-center items-center h-20 w-auto">
      <img src={Logo} className="max-w-[8rem]" />
    </div>
  );
}
