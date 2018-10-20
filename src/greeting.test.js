// greeting.test.js
const greeting = require('./greeting');
test("returns greeting with custom name", () => {
expect(greeting("Bei")).toBe("Hello, Mei!");
});
