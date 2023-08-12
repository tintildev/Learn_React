import "./sass/component/expense.scss";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
  const expensesArray = [
    { id: "e0", title: "New TV", amount: 450, date: new Date(2021, 5, 2) },
    { id: "e1", title: "Games", amount: 50, date: new Date(2021, 5, 5) },
    { id: "e2", title: "Toys", amount: 33, date: new Date(2021, 5, 9) },
    { id: "e3", title: "Magazines", amount: 9.5, date: new Date(2021, 5, 12) },
  ];

  return (
    <Card className="expenses">
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
