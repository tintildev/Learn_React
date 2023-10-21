import React, { useState } from "react";
import "../sass/component/NewExpense.scss";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTag, setEnteredTag] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const tagChangeHandler = (event) => {
    setEnteredTag(event.target.tag);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      tag: enteredTag,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredTag('');
  };

  return (
    <form className="new-expense__form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
            autofocus
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Tag</label>
          <input
            type="Text"
            value={enteredTag}
            onChange={tagChangeHandler}
            required
          />
        </div>
        
        <div className="new-expense__actions">
          <button type="button" className="new-expense__button" onClick={props.onCancle}>
            Cancle
          </button>
          <button type="submit" className="new-expense__button">
            Add Budgets
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
