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

const rakeshAccount = new BankAccount("Rakesh", 1000); //
const johnAccount = new BankAccount("John", 0); //
rakeshAccount.deposit(4000);
johnAccount.deposit(400);
johnAccount.withdraw(40);
console.log(rakeshAccount);
console.log(johnAccount);

// No Hositing with classes
