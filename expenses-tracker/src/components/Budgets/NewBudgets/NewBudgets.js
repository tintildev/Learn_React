import React, { useState } from "react";
import "../sass/component/NewExpense.scss";
import BudgetsForm from "./BudgetsForm";

const NewBudgets = (props) => {
  const [newBudgetsForm, openOrColseForm] = useState(false);

  const saveBudgetsData = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenses(expenseData);
    openOrColseForm(false)
  };

  function addNewExpensesHandler() {
    openOrColseForm(true);
  }

  function cancleHandler(){
    openOrColseForm(false);
  }

  if (newBudgetsForm === true) {
    return (
      <div className="new-expense">
        <BudgetsForm onSaveExpenseData={saveBudgetsData} onCancle={cancleHandler} />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button className="new-expense__button" onClick={addNewExpensesHandler}>Add Budgets</button>
    </div>
  );
};

export default NewBudgets;
