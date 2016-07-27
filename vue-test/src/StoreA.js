class StoreA {
  constructor(initialCount = 0) {
    this.count = initialCount;
  }

  countUp() {
    this.count += 1;
  }
}

export default new StoreA;
