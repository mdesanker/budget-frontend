import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import Nav from "../../elements/Nav";
import { DateTime } from "luxon";
import { RiPencilFill } from "react-icons/ri";

const Account = () => {
  const { user } = useAppSelector((state: RootState) => state.user);

  const formattedDate = user && DateTime.fromISO(user.date).toISODate();

  return (
    <main>
      <div>
        <h1>Your Account</h1>
        <div className="flex justify-between">
          <p className="text-lg">
            <span className="font-medium">Name:</span>{" "}
            {user && user.name.firstName} {user && user.name.lastName}
          </p>
          <RiPencilFill className="text-xl" />
        </div>
        <div>
          <p>Email: {user && user.email}</p>
          <RiPencilFill />
        </div>
        <div>
          <p>Joined: {formattedDate}</p>
          <RiPencilFill />
        </div>
      </div>
      <Nav />
    </main>
  );
};

export default Account;
