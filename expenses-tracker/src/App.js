import "./App.css";
import "./components/sass/base/base.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses></Expenses>
    </div>
  );
}

export default App;
