const express = require("express");
const StudentController = require("./controllers/StudentController");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Visual Thinking API!" });
});

app.get("/v1/students", (req, res) => {
    const students = StudentController.getStudents();
    res.status(200).json({ students });
});

app.get("/v1/students/emails", (req, res) => {
    const emails = StudentController.getEmailsOfCertifiedStudents();
    res.status(200).json({ emails });
});

app.get("/v1/students/credits", (req, res) => {
    const credits = 500;
    const students = StudentController.getStudentsByCredits(credits);
    res.status(200).json({ students });   
});

module.exports = app;
