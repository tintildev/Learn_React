import React from "react";
import "../sass/component/ExpensesFilter.scss";

const ExpenseFilter = (props) => {
  const onSelectHandlerYear = (event) => {
    props.filterYear(event.target.value);
  };

  const onSelectHandlerMonth = (event) => {
    props.filterMonth(event.target.value);
  };

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

  //new Array of Years
  let propsYears = props.items.map((year) => {
    return year.date.getFullYear().toString();
  });
  //remove duplications with set
  let theYears = [...new Set(propsYears)];
  //sorts the elemtes
  theYears.sort();

  return (
    <div className="expenses-filter">
      <label>Filter by </label>
      <div className="expenses-filter__container">
        <label>Month:</label>
        <select
          value={props.selectedMonth}
          className="expenses-filter__control"
          onChange={onSelectHandlerMonth}
        >
          {theMonth.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <div className="expenses-filter__container">
        <label>Year:</label>
        <select
          value={props.selectedYear}
          className="expenses-filter__control"
          onChange={onSelectHandlerYear}
        >
          {theYears.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
