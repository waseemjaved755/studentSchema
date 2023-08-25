const sequelize = require("../../bin/dbConnection");

const {Model , DataType} = require("suquelize");

class StudentList extends Model {}


StudentList.init(

    {
        id : {
            primaryKey : true,
            autoIncrement: true,
            type : DataType.INTEGER,

        },
        fname :
        {
          
            allowNull : false,
            type : DataType.STRING,

        },
        lname :
        {
          
            allowNull : false,
            type : DataType.STRING,

        },
        email:
        {
            unique : true,
            allowNull : false,
            type : DataType.STRING,

        },
        email:
        {

            allowNull : false,
            type : DataType.STRING,

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