// CommonJS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

const { JOHN, PETER } = require("./4-names");
const { sayHi } = require("./5-utils");
const data = require("./6-alternative-flavor");

sayHi("Susan");
sayHi(JOHN);
sayHi(PETER);
console.log(data);

require("./7-mind-grenade"); // since it's a function, then we can directly import it in this way
