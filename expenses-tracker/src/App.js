import "./App.css";
import "./components/sass/base/base.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_DATA = [
  { id: "e0", title: "New TV", amount: 450, date: new Date(2021, 5, 2) },
  { id: "e1", title: "Games", amount: 50, date: new Date(2019, 7, 5) },
  { id: "e2", title: "Toys", amount: 33, date: new Date(2021, 6, 9) },
  { id: "e3", title: "Magazines", amount: 9.5, date: new Date(2021, 5, 12) },
  { id: "e4", title: "Magazines", amount: 9.5, date: new Date(2021, 3, 12) },
  { id: "e5", title: "Magazines", amount: 9.5, date: new Date(2022, 2, 12) },
  { id: "e6", title: "Geschenk", amount: 25, date: new Date(2020, 3, 23) },
  { id: "e7", title: "Geschenk", amount: 25, date: new Date(2021, 3, 23) },
  { id: "e8", title: "Geschenk", amount: 25, date: new Date(2022, 3, 23) },
  { id: "e9", title: "Lebensmittel", amount: 150, date: new Date(2020, 4, 23) },
  { id: "e10", title: "Lebensmittel", amount: 150, date: new Date(2021, 4, 23) },
  { id: "e11", title: "Lebensmittel", amount: 175, date: new Date(2022, 4, 23) },
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
