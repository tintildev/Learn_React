import React from "react";
import './ExpensesFilter.scss';

const ExpenseFilter = (props) => {
    const onSelectHandler = (event) => {
        props.filterData(event.target.value);
    }

  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select className="expenses-filter__control" onChange={onSelectHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
