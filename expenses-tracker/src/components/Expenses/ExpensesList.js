import React from "react";
import "../sass/component/ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //Conditional return Content if data is available, or not.
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">Found no expenses</h2>
    )
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          tag={expense.tag}
          date={expense.date}
          delete={props.delete}
        />
      ))}
    </ul>
  );
}; //ende ExpensesList

export default ExpensesList;
