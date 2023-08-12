import './sass/component/expenseItem.scss'

function ExpenseItem() {
  return (
    <div class="expense-item">
      <div class="expense-item__date">March 28th 2021</div>
      <div class="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div class="expense-item__price">294.67€</div>
    </div>
  );
}

export default ExpenseItem;
