import { useAppSelector } from "../../../store/hooks";
import Nav from "../../elements/Nav";
import "./Account.css";
import Details from "./elements/Details";

const Account = () => {
  return (
    <main className="flex justify-center items-start pt-12 bg-gray-100 min-h-screen pb-16">
      <Details />
      <Nav />
    </main>
  );
};

export default Account;
