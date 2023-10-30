import React, { useState } from "react";
import "../sass/component/newForm.scss";
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
      <div className="new-form">
        <ExpenseForm onSaveExpenseData={saveExpenseData} onCancle={cancleHandler} />
      </div>
    );
  }

  return (
    <div className="new-form">
      <button className="new-form__button" onClick={addNewExpensesHandler}>Add Expenses</button>
    </div>
  );
};

export default NewExpense;
