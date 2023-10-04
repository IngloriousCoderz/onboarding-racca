const person = {
  firstName: "Matteo Antony",
  "last-name": "Mistretta",

  sayHello() {
    return "Hello world!";
  },

  sayHi: () => console.log("Hi!", this),
};

// dot notation
console.log(person.firstName);

// square bracket notation
console.log(person["last-name"]);
const propertyName = "last-name";
console.log(person[propertyName]);

person.age = 40;
console.log(person);

person.age = 41;
console.log(person);

// person = {}

console.log(person.sayHello());

delete person.age;
console.log(person);

{
  const firstName = person.firstName;
  const lastName = person["last-name"];
  console.log(firstName, lastName);
}

{
  const { firstName, "last-name": lastName, ...rest } = person;
  console.log(firstName, lastName, rest);
}

{
  const { ...clone } = person;
  console.log(clone, clone !== person, clone.sayHello === person.sayHello);
}

{
  const newPerson = { ...person, newProp: 42 };
  console.log(newPerson, person);
}

{
  const { sayHello, sayHi, ...rest } = person;
  console.log(rest, person);
}

{
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      const value = person[key];
      console.log(key, value);
    }
  }
}

Object.keys(person).forEach((key) => {
  console.log(key, person[key]);
});

Object.values(person).forEach((value) => {
  console.log(value);
});

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

const newPerson = Object.assign(person, { age: 40 }, { legs: 2, age: 41 });
console.log(person, person === newPerson);

const newestPerson = Object.assign({}, person, { arms: 2 });
console.log(newestPerson, person);
