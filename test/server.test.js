const request = require("supertest");
const app = require("../lib/server");
const http = request(app);

describe("Unit Test for Visual Thinking API", () => {
    test("GET /", async () => {
        const res = await http.get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toMatch(/welcome/i);
    });
});