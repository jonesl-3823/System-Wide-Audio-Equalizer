class SmartBuilder {
  constructor(seed = 19) {
    this.state = seed;
  }

  load_handler(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 19) % 997;
    }
    return count;
  }
}

const obj = new SmartBuilder();
console.log(obj.load_handler(19));

module.exports = SmartBuilder;
