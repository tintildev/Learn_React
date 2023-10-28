import "../sass/component/expense.scss";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

// State Selected Date
function Expenses(props) {
  const [selectedYear, setYear] = useState("2020");
  const [selectedMonth, setMonth] = useState(0);

  //Month
  const theMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Change Methode Selected Date and write into State
  const onSelectFilterYearHandler = (eventData) => {
    setYear(eventData);
  };

  const onSelectFilterMonthHandler = (eventData) => {
    //index
    setMonth(theMonth.indexOf(eventData));
  };

  //Sort Array
  const sortArray = props.items.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  // Filter Expenses
  let filterExpenses = sortArray.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // Filter Month with Index 0 - 11
  filterExpenses = sortArray.filter((expense) => {
    return expense.date.getMonth() === selectedMonth;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        selectedMonth={theMonth[selectedMonth]}
        theMonth={theMonth}
        filterYear={onSelectFilterYearHandler}
        filterMonth={onSelectFilterMonthHandler}
        items={props.items}
      />
      <ExpensesList items={filterExpenses} delete={props.delete} />
    </Card>
  );
}

export default Expenses;
