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

export const dayTrasanctionCount = (
  day: number,
  transactions: ITransactionDB[]
) => {
  return transactions.filter(
    (transaction) => new Date(transaction.date).getDay() === day
  )?.length;
};

export const monthTransactionTotal = (
  month: number,
  transactions: ITransactionDB[]
) => {
  return transactions
    .filter((transaction) => new Date(transaction.date).getMonth() === month)
    ?.map((transaction) => transaction.amount)
    ?.reduce((a, b) => a + parseFloat(b), 0);
};

export const monthTrasanctionCount = (
  month: number,
  transactions: ITransactionDB[]
) => {
  return transactions.filter(
    (transaction) => new Date(transaction.date).getDay() === month
  )?.length;
};

export const timespanTransactionFilter = (
  days: number,
  transactions: ITransactionDB[]
) => {
  return transactions.filter((transaction: ITransactionDB) => {
    const today: number = new Date().getTime();
    const transactionDate: number = new Date(transaction.date).getTime();
    return Math.abs(today - transactionDate) < 1000 * 60 * 60 * 24 * days;
  });
};
