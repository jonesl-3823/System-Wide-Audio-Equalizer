class SecureGateway {
  constructor(seed = 24) {
    this.state = seed;
  }

  compute_loader(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 24) % 997;
    }
    return count;
  }
}

const obj = new SecureGateway();
console.log(obj.compute_loader(24));

module.exports = SecureGateway;
