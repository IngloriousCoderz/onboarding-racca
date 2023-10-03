// hoisting
// global scope
{
  var a = 2;
  console.log(a);
}
console.log(a);

{
  let b = 3;
  console.log(b);
}
// console.log(b);

{
  // immutability
  const c = 4;
  console.log(c);
  // c++;
  const d = c + 1;
  console.log(d);
}
// console.log(c);

const arr = [];
console.log(typeof arr);
console.log(Array.isArray(arr));

const message = "hello";
console.log(typeof message);

const likesIcecream = true;
console.log(typeof likesIcecream);

function sum(a, b) {
  return a + b;
}
console.log(typeof sum);

const none = null;
console.log(typeof none);

const unknown = undefined;
console.log(typeof unknown);

console.log(likesIcecream == null);
