// action types
const INCREMENTED = "counter/incremented";
const RESET = "counter/reset";

// action creators
export const incremented = (amount) => ({ type: INCREMENTED, payload: amount });
export const reset = () => ({ type: RESET });

const INITIAL_VALUE = 0;

// reducer
export default function counter(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case INCREMENTED:
      return state + action.payload;

    case RESET:
      return INITIAL_VALUE;

    default:
      return state;
  }
}

// export function increment(value, amount) {
//   return value + amount;
// }

// export function reset() {
//   return INITIAL_VALUE;
// }
