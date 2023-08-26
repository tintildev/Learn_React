import "./App.css";
import "./components/sass/base/base.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expensesArray = [
    { id: "e0", title: "New TV", amount: 450, date: new Date(2021, 5, 2) },
    { id: "e1", title: "Games", amount: 50, date: new Date(2021, 5, 5) },
    { id: "e2", title: "Toys", amount: 33, date: new Date(2021, 5, 9) },
    { id: "e3", title: "Magazines", amount: 9.5, date: new Date(2021, 5, 12) },
  ];

  const addExpenseHandler = (newExpenseData) => {
    console.log("App.js");
    console.log(newExpenseData)
  }

  return (
    <div className="App">
      <NewExpense onNewExpenses = {addExpenseHandler}/>
      <Expenses items = {expensesArray}></Expenses>
    </div>
  );
}

export default App;
