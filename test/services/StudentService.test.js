const StudentService = require("../../lib/services/StudentService");

describe("Unit Tests for StudentService", () => {
    test("Filter by certification", () => {
        const students = [{ haveCertification: true }];
        const result = StudentService.filterByCertification(students);
        expect(result.length).toBe(1);
    });

    test("Filter by credits", () => {
        const students = [{ credits: 500 }];
        const result = StudentService.filterByCredits(students, 500);
        expect(result.length).toBe(1);
    });

    test("Get emails of students with certification", () => {
        const students = [
            { email: "user1@domain.com", haveCertification: true },
        ];
        const result = StudentService.getEmailsOfCertifiedStudents(students);
        expect(result.length).toBe(1);
    });
});
