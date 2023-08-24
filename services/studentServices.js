//importing th e model

const studentModel = require("../models/studentModel");

module.exports = {

    createStudent : function (body)
    {
        try {
            console.log("services");
           const responce = studentModel.createStudent(body);

           if(responce)
           {
            return responce;
           }
           return "no responce user not created";
        }
        catch (error)
        {
            return error;
        }
    },



}