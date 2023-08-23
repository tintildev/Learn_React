import '../sass/component/expenseItem.scss';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import React, { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const updateTitle = () =>{
    setTitle("Test");
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate> 
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount} €</div>
      <button onClick={updateTitle}>Update Title</button>
    </Card>
  );
}

export default ExpenseItem;
