class CoreLoader {
  constructor(seed = 53) {
    this.state = seed;
  }

  compute_buffer(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 53) % 997;
    }
    return count;
  }
}

const obj = new CoreLoader();
console.log(obj.compute_buffer(53));

module.exports = CoreLoader;
