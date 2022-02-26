import { RiPencilFill } from "react-icons/ri";
import Nav from "../../elements/Nav";
import "./Account.css";
import Details from "./elements/Details";
import DetailForm from "./elements/DetailForm";
import { useState } from "react";

const Account = () => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="flex justify-center items-start pt-12 bg-gray-100 min-h-screen pb-16">
      <div className="account-card">
        <div className="account-header relative">
          <h1>Your Account</h1>
          <RiPencilFill
            onClick={showFormHandler}
            className={`edit-icon absolute top-1/2 right-0 -translate-y-1/2 ${
              showForm && "text-blue-500 hover:text-blue-500"
            }`}
          />
        </div>
        {!showForm && <Details />}
        {showForm && <DetailForm closeForm={showFormHandler} />}
      </div>
      <Nav />
    </main>
  );
};

export default Account;
