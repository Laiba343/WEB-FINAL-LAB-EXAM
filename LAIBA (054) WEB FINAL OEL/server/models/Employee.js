const mongoose= require('mongoose');

const EmployeeSchema= new mongoose.Schema({
    employeeName:{
        type:String,
        required: true,
    },
    dept:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    yearsofExp:{
        type:Number,
        required:true,
    },
    contactNum:{
        type:Number,
        required:true,
    }
});

const Employee = mongoose.model("Employee",EmployeeSchema)
module.exports=Employee;