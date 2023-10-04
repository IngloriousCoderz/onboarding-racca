const numbers = [1, 2, 2, 3, 4, 5, 3, 6, 6, 7];
console.log(new Set(numbers));
console.log([...new Set(numbers)]);

const person = new Map();
person.set("firstName", "Matteo Antony");
person.set(null, () => {});
console.log(person);
