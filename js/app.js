class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  // Submit budget method
  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === "" || value < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p>value cannot be emtpy or negative</p>`;
    }
  }
}

function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  // New instance of the UI Class
  const ui = new UI();

  // Budget form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm();
  });

  // Expense form submit
  expenseForm.addEventListener("submit", function () {
    event.preventDefault();
  });

  // Expense click
  expenseList.addEventListener("submit", function () {});
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});
