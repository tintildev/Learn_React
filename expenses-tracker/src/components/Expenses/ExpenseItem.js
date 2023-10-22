import "../sass/component/expenseItem.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import React from "react";

function ExpenseItem(props) {
  const deleteHandler = () => {
    props.delete(props.id);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__details">
          <img className="icon--delete" src="./img/X.png" alt="delete" onClick={deleteHandler}></img>
          <p className="expense-item__price">{props.amount} €</p>
          <p>{props.tag}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
