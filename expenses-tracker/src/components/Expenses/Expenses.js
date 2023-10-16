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

  // Filter Expenses
  const filterExpensesArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedData;
  });
  



  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedData} filterData={onSelectFilterDataHandler} items={props.items} />
      <ExpensesChart expenses={filterExpensesArray} />
      <ExpensesList items={filterExpensesArray} />
    </Card>
  );
}

export default Expenses;
