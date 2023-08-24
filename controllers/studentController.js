const studentService = require("../services/studentServices");

module.exports = {

    createStudent : function (req ,res)
    {
           try 

           {
            console.log("controller");
               const responce = studentService.createStudent(req.body);
               res.send(responce);
           }
           catch(error)
           {
            return error;
           }
    }
    


}