import { DateTime } from "luxon";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";

const Details = () => {
  const { user } = useAppSelector((state: RootState) => state.user);

  const formattedDate = user && DateTime.fromISO(user.date).toISODate();

  return (
    <>
      <p className="account-group">
        <span className="account-label">Name:</span>{" "}
        {user && user.name.firstName} {user && user.name.lastName}
      </p>
      <p className="account-group">
        <span className="account-label">Email:</span> {user && user.email}
      </p>
      <p className="account-group">
        <span className="font-medium pr-1">Joined:</span> {formattedDate}
      </p>
    </>
  );
};

export default Details;
