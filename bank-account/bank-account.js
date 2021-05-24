//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.account = false;
    this.Balance = 0;
  }

  open() {
    if (this.account) {
      throw new ValueError();
    }
    this.account = true;
  }

  close() {
    if (!this.account) {
      throw new ValueError();
    }
    this.account = false;
    this.Balance = 0;
  }

  deposit(amount) {
    if (!this.account || amount < 0) {
      throw new ValueError();
    }
    this.Balance += amount;
  }

  withdraw(withdrawalAmount) {
    if (!this.account || withdrawalAmount < 0 || withdrawalAmount > this.Balance) {
      throw new ValueError();
    }
    this.Balance -= withdrawalAmount;
  }

  get balance() {
    if (!this.account) {
      throw new ValueError();
    }
    return this.Balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
