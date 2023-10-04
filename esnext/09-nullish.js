// truthy
console.log(
  1 == true,
  0 == false,
  "false" == true,
  "" == false,
  [1] == true,
  [] == false,
  { name: "Antony" } == true,
  {} == true,
  null == false,
  undefined == false
);

// nullish coalescing operator

const message = "Hello world!";
const otherMessage = "'Bye world!";

console.log(
  message !== undefined && message !== null && message !== ""
    ? message
    : undefined
);

console.log(message || otherMessage);

console.log(message != null ? message : otherMessage);

console.log(message ?? otherMessage);

// optional chaining operator

const person = { legs: null }; // [1, 2] };

console.log(person != null ? person.legs : undefined);
console.log(person?.legs?.[0]);
