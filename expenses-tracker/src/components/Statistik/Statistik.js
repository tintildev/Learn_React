import "../sass/component/expense.scss";
import Card from "../UI/Card";
import React, { useState } from "react";
import StatistikFilter from "./StatistikFilter";
import ExpensesChart from "../Expenses/ExpensesChart";

// State Selected Date
function Expenses(props) {
  const [selectedYear, setYear] = useState("2020");

  // Change Methode Selected Date and write into State
  const onSelectFilterYearHandler = (eventData) => {
    setYear(eventData);
  };
  
  //Sort Array
  const sortArray = props.items.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);});

  // Filter Expenses
  let filterExpenses = sortArray.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  

  return (
    <Card className="expenses">
      <StatistikFilter selectedYear={selectedYear} filterYear={onSelectFilterYearHandler} items={props.items} />
      <ExpensesChart expenses={filterExpenses} />
    </Card>
  );
}

export default Expenses;
