import Card from "../UI/Card";
import Budget from "./Budget";
import "../sass/component/budget.scss";

const Budgets = (props) => {
  return (
    <div>
      <Card className="card--budget">
        {props.budgets.map((data) => (
          <Budget
            key={data.id}
            title={data.title}
            amount={data.amount}
            tag={data.tag}
            expenses={props.expenses}
          ></Budget>
        ))}
      </Card>
    </div>
  );
};

export default Budgets;
