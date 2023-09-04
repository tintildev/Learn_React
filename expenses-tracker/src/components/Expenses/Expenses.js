import "../sass/component/expense.scss";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [selectedData, setSelectedData] = useState("");

  const expensesArray = {
    ...props.items,
  };

  const onSelectFilterData = (eventData) => {
    setSelectedData(eventData);
    console.log(selectedData);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter filterData={onSelectFilterData} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
