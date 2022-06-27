import './App.css';
import React, {useEffect} from "react"
import Axios  from 'axios';

function App() {

  const [employeeName,setEmployeeName]= React.useState("");
  const [dept,setDepartment]=React.useState("");
  const [age,setAge]=React.useState(0);
  const [yearsofExp,setExperience]=React.useState(0);
  const [contactNum,setContact]=React.useState(0);
  const [employeeList,setEmployeeList]=React.useState([]);
  const [newEmployeeName,setNewEmployeeName]= React.useState("");
  
  useEffect(()=>{
    Axios.get("http://localhost:3002/read").then(response =>{
      setEmployeeList(response.data);
    })
  })


  const addTolist=()=>{
    Axios.post('http://localhost:3002/insert',{employeeName:employeeName, dept:dept, age:age, yearsofExp:yearsofExp, contactNum:contactNum})
  }

  // const updateFood=(id)=>{
  //   Axios.put("http://localhost:3002/update",{id:id,newFoodName:newFoodName})
  // }

  // const deleteFood=(id)=>{
  //   Axios.delete(`http://localhost:3002/delete/${id}`)
  // }
  return (
      <div className='App'>
        <br></br><h1>EMPLOYEE DETAILS</h1><br></br>
        <label>Employee Name:  </label>
        <input type="text" onChange={(event)=>{
          setEmployeeName(event.target.value);
        }} /> <br></br><br></br>
        <label>Designation:  </label>
        <input type="text" onChange={(event)=>{
          setDepartment(event.target.value);
        }} /> <br></br><br></br>
        <label>Age :  </label>
        <input type="number" onChange={(event)=>{
          setAge(event.target.value);
        }}  /> <br></br><br></br>
        <label>Salary :</label>
        <input type="number" onChange={(event)=>{
          setExperience(event.target.value);
        }}  /> <br></br><br></br>
        <label>Contact Number :  </label>
        <input type="number" onChange={(event)=>{
          setContact(event.target.value);
        }}  /> <br></br><br></br><br></br>
        <button onClick={addTolist}>Add Employee</button>
        <hr/>
        {
          employeeList.map((val, key)=>{
            return <div key={key}> 
              <h2>{val.employeeName}</h2>
              <h2>{val.dept}</h2>
              <h2>{val.age}</h2>
              <h2>{val.yearsofExp}</h2>
              <h2>{val.contactNum}</h2>
              <input type="text" placeholder='new Employee..'  onChange={(event)=>{
          setNewEmployeeName(event.target.value);
        }} />
              {/* <button onClick={()=>updateFood(val._id)}>Update</button>
              <button onClick={()=>deleteFood(val._id)}>Delete</button> */}
            </div>
          })
        }
        </div>
    );
}

export default App;
