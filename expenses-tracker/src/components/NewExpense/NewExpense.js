import React from "react";
import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseData = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString()
    };
    props.onNewExpenses(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
