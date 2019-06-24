const assert = require("assert");

// test 'string' type
assert(typeof 'foo' == 'string');
// test actual value '==' expected value. 
//** deprecated since v9.9.0 */
assert.equal('foo', 'foo');
// test actual value '===' expected value
assert.strictEqual('foo', 'foo');

// AssertionError [ERR_ASSERTION]: Expected values to be strictly equal!!
assert.strictEqual('foo1', 'foo');












