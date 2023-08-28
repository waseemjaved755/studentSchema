const {Model , DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");



class StudentList extends Model {}


StudentList.init(

    {
        id : {
            primaryKey : true,
            autoIncrement: true,
            type : DataTypes.INTEGER,

        },
        fname :
        {
          
            allowNull : false,
            type : DataTypes.STRING,

        },
        lname :
        {
          
            allowNull : false,
            type : DataTypes.STRING,

        },
        email:
        {
            unique : true,
            allowNull : false,
            type : DataTypes.STRING,

        },
        email:
        {

            allowNull : false,
            type : DataTypes.STRING,

        },

    },
     
    {
        sequelize,
        timestamp : true,
        //time stmp will create createdAt and Updatedat in database
        paranoid:true,
        //paranoid will create deletedAt in database

        modelName : "StudentList",

    }

);

module.exports = StudentList;