class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  //   setBalance(amount) {
  //     if (isNaN(amount)) {
  //       throw new Error("Amount is not a valid input");
  //     }
  //     this.#balance = amount;
  //   }
  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }

  //   getBalance() {
  //     return this.#balance;
  //   }

  get balance() {
    return this.#balance;
  }
}

//? Current Account inherit from Bank Account
class currentAccount extends BankAccount {
  transactionLimit = 5000;

  constructor(currentAccount, balance) {
    super(currentAccount, balance);
  }

  calculateInterest(amount) {
    console.log("calculateInterest");
  }

  takeBusinessLoan(amount) {
    this.calculateInterest(amount);
    console.log("Take BusinessLoan of Amount:" + amount);
  }
}
const rakeshAccount = new currentAccount("rakesh", 4000);
// rakeshAccount.setBalance(400);
rakeshAccount.balance = 1200;
// rakeshAccount.#balance = "Hello";
// console.log(rakeshAccount.getBalance());
rakeshAccount.takeBusinessLoan(40000);
console.log(rakeshAccount.balance);
