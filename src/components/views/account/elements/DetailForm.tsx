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
    firstName: "",
    lastName: "",
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
    dispatch(updateUser(formData));
    closeForm();
  };

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.name.firstName,
        lastName: user.name.lastName,
        email: user.email,
      });
    }
  }, [user]);

  const { firstName, lastName, email } = formData;

  return (
    <form onSubmit={submitHandler} className="w-full flex flex-col text-lg">
      <label htmlFor="firstName" className="account-group">
        <span className="account-label">First Name: </span>{" "}
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          className="form-field"
          onChange={formChangeHandler}
        />
      </label>
      <label htmlFor="lastName" className="account-group">
        <span className="account-label">Last Name: </span>{" "}
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
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
