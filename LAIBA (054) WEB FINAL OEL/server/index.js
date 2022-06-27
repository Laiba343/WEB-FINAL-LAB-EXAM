const express = require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const app= express()

const EmployeeModel= require("./models/Employee");

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017',{
    useNewURLParser:true,
});

app.post("/insert",async (req, res)=> {
    const employeeName=req.body.employeeName;
    const  dept=req.body.dept;
    const age=req.body.age;
    const yearsofExp=req.body.yearsofExp;
    const contactNum=req.body.contactNum;

    const employee= new EmployeeModel({ employeeName:employeeName, dept:dept, age:age, yearsofExp:yearsofExp, contactNum:contactNum});

    try{
        await employee.save();
        res.send("Inserted data");
    }catch(err){
        console.log(err);
    }
})


app.get("/read",async (req, res)=> {
    EmployeeModel.find({},(err,result)=>{
        if(err){
            res.send(err);
         }
         res.send(result);
        
    })
})


// app.put("/update",async (req, res)=> {
//     const newFoodName=req.body.newFoodName;
//     const id=req.body.id;

//     try{
//         await FoodModel.findById(id,(err,updatedFood)=>{
//             updatedFood.foodName= newFoodName;
//             updatedFood.save();
//             res.send("update");
//         })
//     }catch(err){
//         console.log(err);
//     }
// })



// app.delete("/delete/:id",async (req, res)=> {
//    const id= req.params.id;
//    await FoodModel.findByIdAndRemove(id).exec();
//    res.send("deleted");
// })


app.listen(3002, () => {
    console.log("Server running");
})