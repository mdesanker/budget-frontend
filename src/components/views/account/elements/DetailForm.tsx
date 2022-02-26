import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { updateUser } from "../../../../store/slices/userSlice";
import { RootState } from "../../../../store/store";

interface Props {
  closeForm: () => void;
}

const DetailForm = ({ closeForm }: Props) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { user } = useAppSelector((state: RootState) => state.user);

  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(updateUser(formData));
    closeForm();
  };

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
    <form onSubmit={submitHandler} className="w-full flex flex-col text-lg">
      <label htmlFor="name" className="account-group">
        <span className="account-label">Name: </span>{" "}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="form-field"
          onChange={formChangeHandler}
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
          onChange={formChangeHandler}
        />
      </label>
      <button className="p-1 font-medium bg-gray-300 rounded my-1">
        Update
      </button>
    </form>
  );
};

export default DetailForm;
