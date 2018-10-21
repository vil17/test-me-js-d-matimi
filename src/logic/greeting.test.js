// greeting.test.js
const greeting = require('./greeting');
test("returns greeting with custom name", () => {
expect(greeting("Danni")).toBe("Hello, Danni you handsome devil");
});
