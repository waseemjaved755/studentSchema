const sequelize = require("../bin/dbConnection");
//const { STRING} = require("sequelize");


//importing Models
const {StudentList} = require("./definitions/student");


const db = {};
const model = {StudentList};
sequelize.model = model;
db.sequelize=sequelize;
module.exports = { db , model};


