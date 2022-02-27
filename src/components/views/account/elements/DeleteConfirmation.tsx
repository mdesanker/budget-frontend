import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/hooks";

interface Props {
  cancelDelete: () => void;
}

const DeleteConfirmation = ({ cancelDelete }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteAccountHandler = () => {
    console.log("Delete account");
    navigate("/");
  };

  return (
    <li>
      <div className="w-60 flex flex-col">
        <p className="text-center font-semibold text-lg">Are you sure?</p>
        <div className="flex justify-around items-center py-2 mb-10">
          <button
            className="account-confirm-btn text-green-700 border-green-700 hover:text-white hover:bg-green-700"
            onClick={deleteAccountHandler}
          >
            Confirm
          </button>
          <button
            className="account-confirm-btn text-red-700 border-red-700 hover:text-white hover:bg-red-700"
            onClick={cancelDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </li>
  );
};

export default DeleteConfirmation;
