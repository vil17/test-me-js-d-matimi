// src/api.test.js
const request = require("supertest");
const api = require("./api");
describe("GET /greeting/:name endpoint", () => {
it("should return a 200 OK status code", async () => {
const res = await request(api).get("/greeting/_");
expect(res.status).toBe(200);
});
it("should return the greeting in a object", async () => {
const res = await request(api).get("/greeting/Diana");
expect(res.body.greeting).toBe("Hello, Diana!");
});
});