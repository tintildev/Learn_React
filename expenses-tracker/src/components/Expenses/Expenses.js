import "../sass/component/expense.scss";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

// State Selected Date
function Expenses(props) {
  const [selectedYear, setYear] = useState("2020");
  const [selectedMonth, setMonth] = useState("Jan");

  // Change Methode Selected Date and write into State
  const onSelectFilterYearHandler = (eventData) => {
    setYear(eventData);
  };

  const onSelectFilterMonthHandler = (eventData) => {
    setMonth(eventData);
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

  filterExpenses = sortArray.filter((expense) => {
    return expense.date.getMonth().toString() === selectedMonth;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        filterYear={onSelectFilterYearHandler}
        filterMonth={onSelectFilterMonthHandler}
        items={props.items}
      />
      <ExpensesList items={filterExpenses} delete={props.delete} />
    </Card>
  );
}

export default Expenses;
