import React from "react";
import "../sass/component/ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesListOfTag = (props) => {
  //Conditional return Content if data is available, or not.
  if (props.items.length === 0) {
    return <p></p>;
  }

  let filterData = [];
  
    filterData = props.items.filter((expense) => {
      return expense.tag === props.tag;
    });
  

  return (
    <ul className="expenses-list">
      {filterData.map((expense) => (
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

export default ExpensesListOfTag;
