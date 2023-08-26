import React, {useState} from "react";
import "./NewExpense.scss";

const ExpenseForm = () => {
  const[enteredTitle, setTitle] = useState('');
  const[enteredAmount, setAmount] = useState('');
  const[enteredDate, setDate] = useState('');

  const titleChangeHandler = (event) =>{
    setTitle(event.target.value);
    console.log(enteredTitle);
  }

  const amountChangeHandler = (event) =>{
    setAmount(event.target.value);
    console.log(enteredAmount);
  }

  const dateChangeHandler = (event) =>{
    setDate(event.target.value);
    console.log(enteredDate);
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData);

  }


  return (
    <form className="new-expense__form" onSubmit={submitHandler}> 
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit" className="new-expense__button">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
