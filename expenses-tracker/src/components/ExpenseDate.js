import "./sass/component/date.scss";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  return (
    <div class="expense-item__date">
      <div class="date__year">{year}</div>
      <div class="date__month">{month}</div>
      <div class="date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
