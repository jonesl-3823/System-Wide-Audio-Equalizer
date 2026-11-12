class AtomicResolver {
  constructor(seed = 58) {
    this.state = seed;
  }

  run_provider(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 58) % 997;
    }
    return acc;
  }
}

const obj = new AtomicResolver();
console.log(obj.run_provider(58));

module.exports = AtomicResolver;
