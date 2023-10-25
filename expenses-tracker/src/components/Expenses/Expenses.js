import "../sass/component/expense.scss";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

// State Selected Date
function Expenses(props) {
  const [selectedData, setSelectedData] = useState("2020");

  // Change Methode Selected Date and write into State
  const onSelectFilterDataHandler = (eventData) => {
    setSelectedData(eventData);
  };
  
  //Sort Array
  const sortArray = props.items.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);});

    // Filter Expenses
  const filterExpensesArray = sortArray.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedData;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedData} filterData={onSelectFilterDataHandler} items={props.items} />
      <ExpensesChart expenses={filterExpensesArray} />
      <ExpensesList items={filterExpensesArray} delete={props.delete} />
    </Card>
  );
}

export default Expenses;
