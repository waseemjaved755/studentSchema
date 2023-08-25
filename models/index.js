const dequelize = require("../bin/dbConnection");
const { STRING} = require("sequelize");


//importing Models
const {
    StudentList

} = require("./definitions/student");

const model = {StudentList};

const db = {};

sequelize.model = model ;
db.sequelize=sequelize;


module.export = { db , model};


