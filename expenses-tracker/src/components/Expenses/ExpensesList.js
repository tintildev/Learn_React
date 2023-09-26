import React from "react";
import "../sass/component/ExpenseFilterxpense.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //Conditional return Content if data is available, or not.
  if (props.item.length === 0) {
    return (
      <h2 className="expenses-list__fallback">Found no expenses</h2>
    )
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}; //ende ExpensesList

export default ExpensesList;
