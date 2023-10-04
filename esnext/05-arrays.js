const numbers = [1, 2, 3, 4, 5];
console.log(numbers[3]);

numbers[3] = 6;
console.log(numbers);

// stack

numbers.push(7);
console.log(numbers);

numbers.pop();
console.log(numbers);

// queue

numbers.unshift(0);
console.log(numbers);

numbers.shift(0);
console.log(numbers);

numbers.splice(2, 2, 8, 9);
console.log(numbers);

delete numbers[3];
console.log(numbers);
numbers[3] = 4;
console.log(numbers);

{
  const FIRST_ITEM_INDEX = 0;

  // magic numbers
  const first = numbers[FIRST_ITEM_INDEX];
  const second = numbers[1];
  const last = numbers[numbers.length - 1];
  console.log(first, second, last);
}

{
  const [first, second, , , last] = numbers;
  console.log(first, second, last);
}

{
  const [first, second, ...rest] = numbers;
  const last = numbers[numbers.length - 1];
  console.log(first, second, rest, last, numbers);
}

const subnumbers = numbers.slice(2, 4);
console.log(subnumbers);

{
  const clone = numbers.slice(0);
  console.log(clone, clone !== numbers);
}

{
  const [...clone] = numbers;
  console.log(clone, clone !== numbers);
}

{
  const newNumbers = [...numbers, 6];
  console.log(newNumbers, numbers);
}

{
  const [, ...rest] = numbers;
  console.log(rest, numbers);
}

console.log(numbers.includes(3));

console.log(numbers.includes(8));

const httpStatus = 200;

if (httpStatus === 200 || httpStatus === 201 || httpStatus === 204) {
}

const SUCCESS_CODES = [200, 201, 204];

if (SUCCESS_CODES.includes(httpStatus)) {
}
