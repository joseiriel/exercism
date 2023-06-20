// Naïve solution

export class BankAccount {
  #isOpen = false;
  #balance = 0;

  constructor() {}

  open() {
    if (this.#isOpen) throw new ValueError("account is already open");
    this.#isOpen = true;
  }

  close() {
    if (!this.#isOpen) throw new ValueError("account is not open");
    this.#balance = 0;
    this.#isOpen = false;
  }

  deposit(amount) {
    if (!this.#isOpen) throw new ValueError("account is not open");
    if (amount <= 0) throw new ValueError("`amount` must be positive");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (!this.#isOpen) throw new ValueError("account is not open");
    if (amount <= 0 || amount > this.balance)
      throw new ValueError("`amount` must be positive");
    this.#balance -= amount;
  }

  get balance() {
    if (!this.#isOpen) throw new ValueError("account is not open");
    return this.#balance;
  }
}

export class ValueError extends Error {
  constructor(message) {
    super("Bank account error" + (message ? `: ${message}` : ""));
  }
}
