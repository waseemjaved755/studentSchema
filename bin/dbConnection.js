const config= require("../config.json");

const { Sequelize } = require("sequelize");

const database = new Sequelize(config.db);

//then works like await
db.authenticate().then(() =>
{
    console.log("Database Connectced");
}).
catch((error) =>
{
    console.log(error);
}) ;

module.exports = database;