import { useState, useEffect } from "react";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";

const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { user } = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user) {
      setFormData({
        name: `${user.name.firstName} ${user.name.lastName}`,
        email: user.email,
      });
    }
  }, [user]);

  const { name, email } = formData;

  return (
    <form className="w-full flex flex-col text-lg">
      <label htmlFor="name" className="account-group">
        <span className="account-label">Name: </span>{" "}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="form-field"
        />
      </label>
      <label htmlFor="email" className="account-group">
        <span className="account-label">Email:</span>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          className="form-field"
        />
      </label>
      <button className="p-1 font-medium bg-gray-300 rounded my-1">
        Update
      </button>
    </form>
  );
};

export default DetailForm;
