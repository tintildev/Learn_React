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
      <ExpenseItem
        title={expensesArray[0].title}
        amount={expensesArray[0].amount}
        date={expensesArray[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesArray[1].title}
        amount={expensesArray[1].amount}
        date={expensesArray[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesArray[2].title}
        amount={expensesArray[2].amount}
        date={expensesArray[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesArray[3].title}
        amount={expensesArray[3].amount}
        date={expensesArray[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
