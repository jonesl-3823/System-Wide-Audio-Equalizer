class HybridHandler {
  constructor(seed = 5) {
    this.state = seed;
  }

  collect_scheduler(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 5) % 997;
    }
    return value;
  }
}

const obj = new HybridHandler();
console.log(obj.collect_scheduler(5));

module.exports = HybridHandler;
