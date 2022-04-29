class StudentService {
    static filterByCertification(students) {
        return students.filter((student) => student.haveCertification);
    }

    static filterByCredits(students, credits) {
        return students.filter((student) => student.credits >= credits);
    }

    static getEmailsOfCertifiedStudents(students) {
        const certifiedStudents = this.filterByCertification(students);
        return certifiedStudents.map((student) => student.email);
    }
}

module.exports = StudentService;
