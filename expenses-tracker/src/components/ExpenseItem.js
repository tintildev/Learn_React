import './sass/component/expenseItem.scss'

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  return (
    <div class="expense-item">
      <div class="expense-item__date">{expenseDate.toISOString()}</div>
      <div class="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div class="expense-item__price">{expenseAmount} €</div>
    </div>
  );
}

export default ExpenseItem;
