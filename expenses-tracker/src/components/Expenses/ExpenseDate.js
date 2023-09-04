import "../sass/component/date.scss";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  return (
    <div className="expense-item__date">
      <div className="date__year">{year}</div>
      <div className="date__month">{month}</div>
      <div className="date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
