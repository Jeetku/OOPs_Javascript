function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  //   this.withdraw = (amount) => {
  //     this.balance -= amount;
  //   };
}

const accounts = [];

// Account Creation Form

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const Bankaccount = new BankAccount(customerName.value, +balance.value);
  accounts.push(Bankaccount);
  console.log(accounts);

  //   console.log(customerName.value, balance.value);
});

// Deposit Form

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const accountResult = accounts.find(
    (acc) => acc.accountNumber === +accountNumber.value
  );
  accountResult.deposit(+amount.value);
  console.log(accounts);
});

// const rakeshAccount = new BankAccount("Rakesh", 1000);
// const jeeteshAccount = new BankAccount("Jeetesh", 2000);

// rakeshAccount.deposit(6000);
// rakeshAccount.withdraw(3000);
// jeeteshAccount.deposit(8000);
// jeeteshAccount.withdraw(2000);
// console.log(rakeshAccount);
// console.log(jeeteshAccount);
// console.log(rakeshAccount.balance);
// console.log(jeeteshAccount.balance);
// console.log(rakeshAccount.accountNumber);
// console.log(jeeteshAccount.customerName);
