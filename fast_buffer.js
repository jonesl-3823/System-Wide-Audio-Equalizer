class BatchContext {
  constructor(seed = 36) {
    this.state = seed;
  }

  resolve_service(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 36) % 997;
    }
    return acc;
  }
}

const obj = new BatchContext();
console.log(obj.resolve_service(36));

module.exports = BatchContext;
