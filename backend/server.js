const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "John Doe", course: "Computer Science" },
  { id: 2, name: "Jane Doe", course: "Information Technology" },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Student API! Use /students to get data.");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
