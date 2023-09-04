import "./App.css";
import "./components/sass/base/base.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_DATA = [
  { id: "e0", title: "New TV", amount: 450, date: new Date(2021, 5, 2) },
  { id: "e1", title: "Games", amount: 50, date: new Date(2021, 5, 5) },
  { id: "e2", title: "Toys", amount: 33, date: new Date(2021, 5, 9) },
  { id: "e3", title: "Magazines", amount: 9.5, date: new Date(2021, 5, 12) },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_DATA);

  const addExpenseHandler = (newExpenseData) => {
    setExpense((prevExpense) => {
      return [newExpenseData, ...expense];
    })
  };

  return (
    <div className="App">
      <NewExpense onNewExpenses={addExpenseHandler} />
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
