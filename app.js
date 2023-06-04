
let monthlyBudget = 0;
let expenses = [];


function addBudget() {
  var budgetInput = document.getElementById('budget-input');
  var budgetValue = parseInt(budgetInput.value);

  if (isNaN(budgetValue) || budgetValue <= 0) {
    alert('Please enter a valid monthly budget.');
    return;
  }

  monthlyBudget = budgetValue;
  budgetInput.value = '';
  updateRemainingBudget();
}


function addExpense() {
    var descriptionInput = document.getElementById('description-input');
    var amountInput = document.getElementById('amount-input');
    var dateInput = document.getElementById('date-input');

    var description = descriptionInput.value.trim();
    var amount = parseInt(amountInput.value);
    var date = dateInput.value;

  if (description === '' || isNaN(amount) || amount <= 0 || date === '') {
    alert('Please enter valid expense details.');
    return;
  }

  var expense = {
    description: description,
    amount: amount,
    date: date
  };

  expenses.push(expense);


  descriptionInput.value = '';
  amountInput.value = '';
  dateInput.value = '';

  updateExpenseTable();
  updateRemainingBudget();
}


function updateExpenseTable() {
    var expenseTable = document.getElementById('expense-table');
  
  expenseTable.innerHTML = '<tr><th>Description</th><th>Amount</th><th>Date</th></tr>';


  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    var row = document.createElement('tr');
    row.innerHTML = `<td>${expense.description}</td><td>${expense.amount}</td><td>${expense.date}</td>`;
    expenseTable.appendChild(row);
  }
}


function updateRemainingBudget() {
    var remainingBudget = document.getElementById('remaining-budget');
    var totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    var remainingAmount = monthlyBudget - totalExpenses;

  remainingBudget.textContent = `Remaining Budget: ${remainingAmount}`;
}
