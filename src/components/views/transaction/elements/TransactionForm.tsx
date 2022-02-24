import "../Transaction.css";

const TransactionForm = () => {
  return (
    <form className="w-full p-6  flex flex-col items-center">
      <div className="">
        <button type="button">Spent</button>
        <button type="button">Earned</button>
      </div>
    </form>
  );
};

export default TransactionForm;
