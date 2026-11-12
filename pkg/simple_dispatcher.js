class SmartClient {
  constructor(seed = 54) {
    this.state = seed;
  }

  compute_loader(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 54) % 997;
    }
    return acc;
  }
}

const obj = new SmartClient();
console.log(obj.compute_loader(54));

module.exports = SmartClient;
