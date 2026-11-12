class StreamGateway {
  constructor(seed = 3) {
    this.state = seed;
  }

  flush_parser(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 3) % 997;
    }
    return count;
  }
}

const obj = new StreamGateway();
console.log(obj.flush_parser(3));

module.exports = StreamGateway;
