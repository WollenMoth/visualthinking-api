const StudentController = require("../../lib/controllers/StudentController");

describe("Unit tests for StudentController", () => {
    test("Get students", () => {
        const students = StudentController.getStudents();
        expect(students.length).toBeDefined();
    });

    test("Get emails of certified students", () => {
        const emails = StudentController.getEmailsOfCertifiedStudents();
        expect(emails.length).toBeDefined();
    });

    test("Get students by credits", () => {
        const students = StudentController.getStudentsByCredits(500);
        expect(students.length).toBeDefined();
    });
});
