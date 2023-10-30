import Budget from "./Budget";
import "../sass/component/budget.scss";

const Budgets = (props) => {


  return (
    <div>
      <div className="divBudget">
        {props.budgets.map((data) => (
          <Budget
            key={data.id}
            title={data.title}
            amount={data.amount}
            tag={data.tag}
            expenses={props.expenses}
            show={props.show}
          ></Budget>
        ))}
      </div>
    </div>
  );
};

export default Budgets;
