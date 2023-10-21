import React from "react";
import "../sass/component/ExpensesFilter.scss";

const ExpenseFilter = (props) => {
  const onSelectHandler = (event) => {
    props.filterData(event.target.value);
  };

  //new Array of Years
  let propsYears = props.items.map((year) => {return year.date.getFullYear().toString()})
  //remove duplications with set
  let theYears = [...new Set(propsYears)]
  //sorts the elemtes
  theYears.sort();
  console.log(theYears);

  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <p>Todo: Month</p>
      <select
        value={props.selected}
        className="expenses-filter__control"
        onChange={onSelectHandler}
      >
        {theYears.map((item) => {
          return <option value={item}>{item}</option>
        })}
      </select>
    </div>
  );
};

export default ExpenseFilter;
