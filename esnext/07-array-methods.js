const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

{
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    console.log(i, item);
  }
}

{
  for (const item of numbers) {
    const index = numbers.indexOf(item);
    console.log(index, item);
  }
}

{
  numbers.forEach((item, index, arr) => {
    console.log(index, item, arr);
  });
}

{
  // short-circuit
  numbers.forEach(console.log);

  numbers.forEach((item, index, arr) => {
    console.log(item);
  });
}

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares, numbers);
}

{
  const squares = numbers.map((item, index, arr) => {
    return square(item);
  });
  console.log(squares);
}

{
  const squares = numbers.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens, numbers);
}

{
  const evens = numbers.filter((item, index, arr) => {
    return isEven(item);
  });
  console.log(evens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven = undefined;
  numbers.forEach((item) => {
    if (firstEven == null && isEven(item)) {
      firstEven = item;
    }
  });
  console.log(firstEven);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

// firstEvenIndex: [1, 2, 3, 4, 5] -> 1

{
  const firstEvenIndex = numbers.findIndex(isEven);
  console.log(firstEvenIndex);
}

// hasEvens: [1, 2, 3, 4, 5] -> true

{
  let hasEvens = false;
  numbers.forEach((item) => {
    if (isEven(item)) {
      hasEvens = true;
    }
  });
  console.log(hasEvens);
}

{
  const hasEvens = numbers.some(isEven);
  console.log(hasEvens);
}

// allEvens: [1, 2, 3, 4, 5] -> false

{
  let allEvens = true;
  numbers.forEach((item) => {
    if (!isEven(item)) {
      allEvens = false;
    }
  });
  console.log(allEvens);
}

{
  const allEvens = numbers.every(isEven);
  console.log(allEvens);
}

// summation: [1, 2, 3, 4, 5] -> 15

{
  let summation = 0; // init
  numbers.forEach((item) => {
    summation += item; // acc
  });
  console.log(summation); // return
}

{
  const [first, ...rest] = numbers;
  let summation = first;
  rest.forEach((item) => {
    summation += item; // acc
  });
  console.log(summation); // return
}

{
  const summation = numbers.reduce((acc, item, index, arr) => {
    acc += item;
    return acc;
  }, 0);
  console.log(summation);
}

{
  const summation = numbers.reduce((acc, item, index, arr) => {
    acc += item;
    return acc;
  });
  console.log(summation);
}

{
  const summation = numbers.reduce(sum);
  console.log(summation);
}

// summationOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let summation = 0;
  for (const item of numbers) {
    if (isEven(item)) {
      summation += square(item);
    }
  }
  console.log(summation);
}

{
  const evens = numbers.filter(isEven);
  const squares = evens.map(square);
  const summation = squares.reduce(sum);
  console.log(summation);
}

{
  const summation = numbers //
    .filter(isEven)
    .map(square)
    .reduce(sum);
  console.log(summation);
}

// summationOfEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  let summation = 0;
  for (const item of numbers) {
    const squared = square(item);
    if (isEven(squared)) {
      summation += squared;
    }
  }
  console.log(summation);
}

{
  const summation = numbers //
    .map(square)
    .filter(isEven)
    .reduce(sum);
  console.log(summation);
}

{
  const unsorted = [5, 2, 6, 1, 3];
  console.log(unsorted);
  const sorted = [...unsorted];
  sorted.sort((a, b) => a - b);
  console.log(sorted, unsorted);
}

{
  const unsorted = [5, 2, 6, 1, 3];
  console.log(unsorted);
  const sorted = unsorted.toSorted((a, b) => a - b);
  console.log(sorted, unsorted);
}
