const request = require("supertest");
const app = require("../lib/server");
const http = request(app);

describe("Unit Test for Visual Thinking API", () => {
    test("GET /", async () => {
        const res = await http.get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toMatch(/welcome/i);
    });

    test("GET /v1/students", async () => {
        const res = await http.get("/v1/students");
        expect(res.statusCode).toBe(200);
        expect(res.body.students).toBeDefined();
        expect(res.body.students.length).toBeDefined();
    });

    test("GET /v1/students/emails", async () => {
        const res = await http.get("/v1/students/emails");
        expect(res.statusCode).toBe(200);
        expect(res.body.emails).toBeDefined();
        expect(res.body.emails.length).toBeDefined();
    });

    test("GET /v1/students/credits", async () => {
        const res = await http.get("/v1/students/credits");
        expect(res.statusCode).toBe(200);
        expect(res.body.students).toBeDefined();
        expect(res.body.students.length).toBeDefined();
    });
});
