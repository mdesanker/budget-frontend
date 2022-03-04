import { DateTime } from "luxon";
import { ITransaction } from "../store/slices/transactionSlice";

export const totalSpent = (transactions: ITransaction[]) => {
  if (transactions.length > 0) {
    const spent: any = transactions
      .filter((transaction) => transaction.type === "expense")
      .map((transaction) => transaction.amount)
      .reduce((a, b) => a + parseFloat(b), 0);

    const earned: any = transactions
      .filter((transaction) => transaction.type === "earning")
      .map((transaction) => transaction.amount)
      .reduce((a, b) => a + parseFloat(b), 0);

    return (spent - earned).toFixed(2);
  }
};

export const dayTransactionTotal = (
  day: number,
  transactions: ITransaction[]
) => {
  return transactions
    .filter(
      (transaction) => DateTime.fromISO(transaction.date.toString()).day === day
    )
    ?.map((transaction) => transaction.amount)
    ?.reduce((a, b) => a + parseFloat(b), 0);
};

export const dayTrasanctionCount = (
  day: number,
  transactions: ITransaction[]
) => {
  return transactions.filter(
    (transaction) => DateTime.fromISO(transaction.date.toString()).day === day
  )?.length;
};

export const monthTransactionTotal = (
  month: number,
  transactions: ITransaction[]
) => {
  return transactions
    .filter(
      (transaction) =>
        DateTime.fromISO(transaction.date.toString()).month === month
    )
    ?.map((transaction) => transaction.amount)
    ?.reduce((a, b) => a + parseFloat(b), 0);
};

export const monthTrasanctionCount = (
  month: number,
  transactions: ITransaction[]
) => {
  return transactions.filter(
    (transaction) =>
      DateTime.fromISO(transaction.date.toString()).month === month
  )?.length;
};

export const categoryTotal = (
  category: string,
  transactions: ITransaction[]
) => {
  return transactions
    .filter((transaction) => transaction.category === category)
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + parseFloat(b), 0);
};

export const timespanTransactionFilter = (
  days: number,
  transactions: ITransaction[]
) => {
  return transactions.filter((transaction: ITransaction) => {
    const today: number = new Date().getTime();
    const transactionDate: number = DateTime.fromISO(
      transaction.date.toString()
    ).valueOf();
    return Math.abs(today - transactionDate) < 1000 * 60 * 60 * 24 * days;
  });
};
