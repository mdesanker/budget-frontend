import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import Nav from "../../elements/Nav";
import { DateTime } from "luxon";
import { RiPencilFill } from "react-icons/ri";
import "./Account.css";

const Account = () => {
  const { user } = useAppSelector((state: RootState) => state.user);

  const formattedDate = user && DateTime.fromISO(user.date).toISODate();

  return (
    <main className="flex justify-center items-start pt-12 bg-gray-100 min-h-screen pb-16">
      <div className="account-card">
        <h1 className="account-header">Your Account</h1>
        <div className="account-group">
          <p>
            <span className="font-medium">Name:</span>{" "}
            {user && user.name.firstName} {user && user.name.lastName}
          </p>
          <RiPencilFill className="edit-icon" />
        </div>
        <div className="account-group">
          <p>
            <span className="font-medium">Email:</span> {user && user.email}
          </p>
          <RiPencilFill className="edit-icon" />
        </div>
        <div className="account-group">
          <p>
            <span className="font-medium">Joined:</span> {formattedDate}
          </p>
        </div>
      </div>
      <Nav />
    </main>
  );
};

export default Account;
