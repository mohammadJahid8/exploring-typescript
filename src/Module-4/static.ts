class Counter {
  static counter: number = 0;

  constructor(counter: number) {
    Counter.counter = counter;
  }

  static increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}

// const countIns = new Counter(0);
// const countIns1 = new Counter(1);

console.log(Counter.increment());
console.log(Counter.increment());
