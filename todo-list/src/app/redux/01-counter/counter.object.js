const INITIAL_VALUE = 0;

export const counter = {
  value: INITIAL_VALUE,

  increment(amount) {
    this.value += amount;
  },

  reset() {
    this.value = INITIAL_VALUE;
  },
};
