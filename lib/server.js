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

module.exports = app;
