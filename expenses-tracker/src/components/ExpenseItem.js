import './sass/component/expenseItem.scss'

function ExpenseItem(props) {
  
  return (
    <div class="expense-item">
      <div class="expense-item__date">{props.date.toISOString()}</div>
      <div class="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div class="expense-item__price">{props.amount} €</div>
    </div>
  );
}

export default ExpenseItem;
