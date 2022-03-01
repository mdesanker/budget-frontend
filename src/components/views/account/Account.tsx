import { RiPencilFill, RiDeleteBinLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import Nav from "../../elements/Nav";
import "./Account.css";
import Details from "./elements/Details";
import DetailForm from "./elements/DetailForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { logout } from "../../../store/slices/userSlice";
import DeleteConfirmation from "./elements/DeleteConfirmation";
import { clearAllTransactions } from "../../../store/slices/transactionSlice";

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearAllTransactions());
    navigate("/");
  };

  const showDeleteHandler = () => {
    setShowDelete(!showDelete);
  };

  return (
    <main className="flex flex-col justify-start items-center pt-12 bg-gray-200 min-h-screen pb-16">
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
      <ul className="w-full flex flex-col items-center pt-4">
        <li>
          <button className="account-btn" onClick={logoutHandler}>
            <div>
              <ImExit className="h-6 w-6" />
            </div>
            Log out
          </button>
        </li>
        {!showDelete && (
          <li>
            <button
              className="account-btn text-red-600"
              onClick={showDeleteHandler}
            >
              <div>
                <RiDeleteBinLine className="h-6 w-6" />
              </div>
              Delete account
            </button>
          </li>
        )}
        {showDelete && <DeleteConfirmation cancelDelete={showDeleteHandler} />}
      </ul>
      <Nav />
    </main>
  );
};

export default Account;
