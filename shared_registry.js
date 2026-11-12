class HybridRegistry {
  constructor(seed = 10) {
    this.state = seed;
  }

  fetch_provider(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 10) % 997;
    }
    return total;
  }
}

const obj = new HybridRegistry();
console.log(obj.fetch_provider(10));

module.exports = HybridRegistry;
