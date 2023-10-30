import React, { useState } from "react";
import "../sass/component/newForm.scss";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTag, setEnteredTag] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const tagChangeHandler = (event) => {
    setEnteredTag(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      tag: enteredTag,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTag('');
  };

  return (
    <form className="new-form__form" onSubmit={submitHandler}>
      <div className="new-form__controls">
        <div className="new-form__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
            autoFocus
          />
        </div>
        <div className="new-form__control">
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
        <div className="new-form__control">
          <label>Tag</label>
          <input
            type="text"
            value={enteredTag}
            onChange={tagChangeHandler}
            required
          />
        </div>
        <div className="new-form__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            //max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
        
        <div className="new-form__actions">
          <button type="button" className="new-form__button" onClick={props.onCancle}>
            Cancle
          </button>
          <button type="submit" className="new-form__button">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
