import "./App.css";
import "./components/sass/base/base.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Naviagtion";
import React, { useState } from "react";


const DUMMY_DATA = [
  {
    id: "e0",
    title: "New TV",
    amount: 450,
    tag: "fun",
    date: new Date(2021, 5, 2),
  },
  {
    id: "e1",
    title: "Games",
    amount: 50,
    tag: "fun",
    date: new Date(2019, 7, 5),
  },
  {
    id: "e2",
    title: "Toys",
    amount: 33,
    tag: "fun",
    date: new Date(2021, 6, 9),
  },
  {
    id: "e3",
    title: "Magazines",
    amount: 9.5,
    tag: "fun",
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "Magazines",
    amount: 9.5,
    tag: "fun",
    date: new Date(2021, 3, 12),
  },
  {
    id: "e5",
    title: "Magazines",
    amount: 9.5,
    tag: "fun",
    date: new Date(2022, 2, 12),
  },
  {
    id: "e6",
    title: "Geschenk",
    amount: 25,
    tag: "friends",
    date: new Date(2020, 3, 23),
  },
  {
    id: "e7",
    title: "Geschenk",
    amount: 25,
    tag: "friends",
    date: new Date(2021, 3, 23),
  },
  {
    id: "e8",
    title: "Geschenk",
    amount: 25,
    tag: "friends",
    date: new Date(2022, 3, 23),
  },
  {
    id: "e9",
    title: "Lebensmittel",
    amount: 150,
    tag: "food",
    date: new Date(2020, 4, 23),
  },
  {
    id: "e10",
    title: "Lebensmittel",
    amount: 150,
    date: new Date(2021, 4, 23),
  },
  {
    id: "e11",
    title: "Lebensmittel",
    amount: 175,
    date: new Date(2022, 4, 23),
  },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_DATA);

  const addExpenseHandler = (newExpenseData) => {
    setExpense((prevExpense) => {
      return [newExpenseData, ...expense];
    });
  };

  return (
    <div className="App">
      <Navigation></Navigation>
      <h1>Hello World</h1>
      <h2>This is my first expense tracker with React.</h2>
      <NewExpense onNewExpenses={addExpenseHandler} />
      <Expenses items={expense}></Expenses>
      <Footer></Footer>
    </div>
  );
}

export default App;
