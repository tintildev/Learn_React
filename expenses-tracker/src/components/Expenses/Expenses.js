import "../sass/component/expense.scss";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expensesArray = {
    ...props.items
  }

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
