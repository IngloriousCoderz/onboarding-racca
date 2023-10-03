{
  // function declaration
  // hoisting

  console.log(sum(2, 3));
  console.log(this);

  function sum(a = 2, b = 3) {
    console.log(this);
    return a + b;
  }

  console.log(sum(undefined, 3));
  console.log(sum(2));
}

{
  // function expression
  // no hoisting

  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));
}

{
  // arrow functions
  // compact
  // preserve context

  // console.log(this)
  // const sum = (a, b) => {
  //   console.log(this)
  //   return a + b;
  // };

  const sum = (a, b) => a + b; // sum: (x, y) -> x + y

  console.log(sum(2, 3));
}
