const buffer = require("buffer");

// Creates a new Buffer.
const buf = Buffer.from('Hello world!')
// Replaces the character at index 11.
buf[11] = 1001 //�
console.log(buf.toString()) //Hello world�
console.log(buf.length) //12
