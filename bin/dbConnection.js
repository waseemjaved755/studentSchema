const config= require("../config.json");

const { sequelize } = require("sequelize");

const db = new Sequelize(config.db);

//then works like await
db.authenticate().then(() =>
{
    console.log("Database Connectced");
}).
catch((error) =>
{
    console.log(error);
}) ;

module.exports = db;