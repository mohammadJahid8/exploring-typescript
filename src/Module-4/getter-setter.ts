class Bankaccount {
  public id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  //   getter
  get balance(): number {
    return this._balance;
  }
  //   setter
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }

  getBalance(): string {
    console.log(`My balance is ${this.balance}`);
    return `My balance is ${this.balance}`;
  }
  addBalance(amount: number) {
    this._balance = this.balance + amount;
  }
}

class StudenAcc extends Bankaccount {
  testing() {
    // this.balance;
  }
}

const bankac = new Bankaccount(1, "jahid", 10);
// bankac.balance = 0;
// console.log(bankac.addBalance(10));
// console.log(bankac.deposit);
bankac.deposit = 90;
console.log(bankac.balance);
