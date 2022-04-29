const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getStudents() {
        return Reader.readJsonFile("visualpartners.json");
    }

    static getStudentsByCredits(credits) {
        const students = this.getStudents();
        return StudentService.filterByCredits(students, credits);
    }

    static getEmailsOfCertifiedStudents() {
        const students = this.getStudents();
        return StudentService.getEmailsOfCertifiedStudents(students);
    }
}

module.exports = StudentController;
