const studentRouter = require("express").Router();
const studentController = require("../controllers/studentController");

studentRouter.post("/createStudent" , studentController.createStudent);


module.exports = studentRouter ;