class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
      } else {
        console.log("Invalid deposit amount. Please enter a positive value.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Invalid withdrawal amount. Please enter a positive value.");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $$ ${this.balance.toFixed(2)}`);
    }
  }
  
  // Create two bank account instances
  const account1 = new BankAccount(1001, "John Doe", 1000);
  const account2 = new BankAccount(1002, "Jane Smith", 500);
  
  // Demonstrate functionalities
  console.log("**Account 1**");
  account1.deposit(200);
  account1.withdraw(150);
  account1.displayAccountInfo();
  
  console.log("\n**Account 2**");
  account2.deposit(100);
  account2.withdraw(700); // Should display "Insufficient funds"
  account2.displayAccountInfo();
  