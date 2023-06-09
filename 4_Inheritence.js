// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

//? Current Account  inherit from Bank Account

// function currentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 5000;
// }

// currentAccount.prototype = Object.create(BankAccount.prototype);

// currentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Take bussinessLoan of Amount:" + amount);
// };

//? Saving Account inherit from Bank Account

// function savingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 15000;
// }
// savingAccount.prototype = Object.create(BankAccount.prototype);

// currentAccount.prototype.takePersonalLoan = function (amount) {
//   console.log("Take personalLoan of Amount:" + amount);
// };

// const jeeteshAccount = new BankAccount("Jeetesh", 20000);
// const rakeshAccount = new currentAccount("Rakesh", 8000);
// const johnAccount = new savingAccount("John", 800);

// rakeshAccount.deposit(500);
// johnAccount.withdraw(500);

// console.log(jeeteshAccount);
// console.log(rakeshAccount);
// console.log(johnAccount);

class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

//? Saving Account inherit from Bank Account
class savingAccount extends BankAccount {
  transactionLimit = 15000;
  constructor(customerName, balance) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log("Take PersonalLoan of Amount:" + amount);
  }
}
//? Current Account inherit from Bank Account
class currentAccount extends BankAccount {
  transactionLimit = 5000;

  constructor(currentAccount, balance) {
    super(currentAccount, balance);
  }

  takeBusinessLoan(amount) {
    console.log("Take BusinessLoan of Amount:" + amount);
  }
}

const jeeteshAccount = new BankAccount("Jeetesh", 20000);
const rakeshAccount = new currentAccount("Rakesh", 8000);
const johnAccount = new savingAccount("John", 800);

rakeshAccount.deposit(500);
johnAccount.withdraw(500);

console.log(jeeteshAccount);
console.log(rakeshAccount);
console.log(johnAccount);

johnAccount.takePersonalLoan(4000);
