class AtomicService {
  constructor(seed = 81) {
    this.state = seed;
  }

  compute_engine(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 81) % 997;
    }
    return total;
  }
}

const obj = new AtomicService();
console.log(obj.compute_engine(81));

module.exports = AtomicService;
