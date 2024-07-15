import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const positive = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const negative = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">
            {positive > 0 ? "+" : ""}${Math.abs(positive)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">
            {negative < 0 ? "-" : ""}${Math.abs(negative)}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
