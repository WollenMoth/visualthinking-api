const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader", () => {
    test("Read a JSON file", () => {
        const partners = Reader.readJsonFile("test/files/visualpartners.json");

        expect(partners.length).toBeDefined();
    });
});
