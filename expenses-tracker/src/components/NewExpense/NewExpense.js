import React, { useState } from "react";
import "../sass/component/NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [newExpensesForm, openOrColseNewExpensesForm] = useState(false);

  const saveExpenseData = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenses(expenseData);
    openOrColseNewExpensesForm(false)
  };

  function addNewExpensesHandler() {
    openOrColseNewExpensesForm(true);
  }

  function cancleHandler(){
    openOrColseNewExpensesForm(false);
  }

  if (newExpensesForm === true) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData} onCancle={cancleHandler} />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button className="new-expense__button" onClick={addNewExpensesHandler}>Add new Expenses</button>
    </div>
  );
};

export default NewExpense;
