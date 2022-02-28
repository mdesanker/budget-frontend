import { ITransactionDB } from "../store/slices/transactionSlice";

export const totalSpent = (transactions: ITransactionDB[]) => {
  if (transactions.length > 0) {
    const spent: any = transactions
      .filter((transaction) => transaction.type === "expense")
      .map((transaction) => transaction.amount)
      .reduce((a, b) => a + b);

    const earned: any = transactions
      .filter((transaction) => transaction.type === "earning")
      .map((transaction) => transaction.amount)
      .reduce((a, b) => a + b);

    return (spent - earned).toFixed(2);
  }
};

export const dayTransactionTotal = (
  day: number,
  transactions: ITransactionDB[]
) => {
  return transactions
    .filter((transaction) => new Date(transaction.date).getDay() === day)
    ?.map((transaction) => transaction.amount)
    ?.reduce((a, b) => a + parseFloat(b), 0);
};
