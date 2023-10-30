import React, { useState } from "react";
import "../sass/component/NewForm.scss";
import BudgetsForm from "./BudgetsForm";

const NewBudgets = (props) => {
  const [newBudgetsForm, openOrColseForm] = useState(false);

  const saveBudgetsData = (enterdBudgetData) => {
    console.log(enterdBudgetData);
    const budgetData = {
      ...enterdBudgetData,
      id: Math.random().toString(),
    };
    props.newBudgetHandler(budgetData);
    openOrColseForm(false);
  };

  function addNewBudgetHandler() {
    openOrColseForm(true);
  }

  function cancleHandler() {
    openOrColseForm(false);
  }

  if (newBudgetsForm === true) {
    return (
      <div className="new-form">
        <BudgetsForm
          onSaveExpenseData={saveBudgetsData}
          onCancle={cancleHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-form">
      <button className="new-form__button" onClick={addNewBudgetHandler}>
        Add Budgets
      </button>
    </div>
  );
};

export default NewBudgets;
