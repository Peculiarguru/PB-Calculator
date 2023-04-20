class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }
  get pi() {
    return `PI (${this.PI})`;
  }
  get e() {
    return `Euler's number (${this.E})`;
  }

  //methods
  ration(x, y, width) {
    const height = (y * width) / x;
    return `height is ${height} on ratio ${x}:${y}`;
  }
  percentage(x, y) {
    return (x / y) * 100;
  }
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return y - x;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return x / y;
  }
  modulation(x, y) {
    return x % y;
  }
  elevate(x, y) {
    return Math.pow(x, y);
  }
  sqrt(x) {
    return Math.sqrt(x);
  }
}

const calculate = new Calculator();
console.log(calculate.e);
console.log(calculate.pi);
console.log(calculate.subtract(5, 7));
console.log(calculate.ration(5, 7, 300));
console.log(calculate.multiply(6, 4));
console.log(calculate.divide(6, 4));
console.log(calculate.modulation(6, 4));
console.log(calculate.elevate(5, 3));
console.log(calculate.sqrt(25));
