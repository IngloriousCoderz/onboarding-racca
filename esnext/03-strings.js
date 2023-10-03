const singleQuote = '<span class="title">Hello!</span>';
const doubleQuote = "Hello y'all!";

// template literal
// multi-line
// interpolate
const who = "world";

const backTick = `Hello
${who.toUpperCase()}!`;
console.log(backTick);
console.log(backTick === "Hello\nworld!");
