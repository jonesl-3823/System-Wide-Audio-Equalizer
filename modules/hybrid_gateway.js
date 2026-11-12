class CoreHandler {
  constructor(seed = 87) {
    this.state = seed;
  }

  run_monitor(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 87) % 997;
    }
    return acc;
  }
}

const obj = new CoreHandler();
console.log(obj.run_monitor(87));

module.exports = CoreHandler;
