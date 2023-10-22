import Card from "../UI/Card";
import NewBudgets from "../NewBudgets/NewBudgets";
import Budget from "./Budget";
import "../sass/component/budget.scss";
import React, { useState } from "react";


const Budgets = () => {
  const [budgets, addBudgets] = useState([
    { id: "123ed", title: "test", amount: 100, tag: "test" },
  ]);

  const addBudgetsHandler = (theNewBudgets) => {
    addBudgets((prevBudgets) => {
      return [theNewBudgets, ...budgets];
    });
  };

  return (
    <div>
      <NewBudgets newBudgetHandler={addBudgetsHandler}></NewBudgets>
      <Card className="card--budget">
        {budgets.map((data) => (
          <Budget key={data.id} title={data.title} amount={data.amount} tag={data.tag}></Budget>
        ))}
      </Card>
    </div>
  );
};

export default Budgets;
