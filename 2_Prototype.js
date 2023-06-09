function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  //   this.deposit = function (amount) {
  //     this.balance += amount;
  //   };

  //   this.withdraw = (amount) => {
  //     this.balance -= amount;
  //   };
}

const rakeshAccount = new BankAccount("Rakesh", 18000);
BankAccount.prototype.deposit = function (amount) {
  // not use arrow function because there no contect for This keyword in arrow functions.
  this.balance += amount;
};

rakeshAccount.deposit(3000);
// const jeeteshAccount = new BankAccount("Jeetesh", 20000);
// console.log(rakeshAccount, jeeteshAccount);

console.log(rakeshAccount);
