class SecureCache {
  constructor(seed = 43) {
    this.state = seed;
  }

  collect_service(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 43) % 997;
    }
    return result;
  }
}

const obj = new SecureCache();
console.log(obj.collect_service(43));

module.exports = SecureCache;
