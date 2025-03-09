import { useState } from "react";
import Navbar from "./nav";
import axios from "axios";
const AddUser = () =>{
    const[firstName , setfirstName] = useState("");
    const[lastName , setlastName] = useState("");
    const[email , setemail] = useState("");
    const[phoneNumber , setphoneNumber] = useState("");
    const[hireDate , sethireDate] = useState("");
    const[jobTitle , setjobTitle] = useState("");
    const[departmentID , setdepartmentID] = useState("");
    const[salary , setsalary] = useState("");
    const addform = async (e) =>{
        e.preventDefault();
        const newEmployee = {
            employeeID: 0,  
            firstName,
            lastName,
            email,
            phoneNumber,
            hireDate: `${hireDate}T00:00:00`, 
            jobTitle,
            departmentID: parseInt(departmentID, 10),
            salary: parseFloat(salary) 
        };
        try {
            const response = await axios.post(
                "https://localhost:7026/api/Employee",
                newEmployee,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            setfirstName("");
            setlastName("");
            setemail("");
            setphoneNumber("");
            sethireDate("");
            setjobTitle("");
            setdepartmentID("");
            setsalary("");
            alert("New employee add successfully")
        } catch (err) {
            alert(err)
            console.error(err);
        }
    } 
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="container2">
                    
                    <form action="" className="login_form" onSubmit={addform}>
                        <input 
                            type="text" 
                            className="text_box"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                            required
                        />
                        <input 
                            type="text" 
                            className="text_box"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                            required
                        />
                        <input 
                            type="email" 
                            className="text_box"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                        <input 
                            type="text" 
                            className="text_box"
                            placeholder="Phone number"
                            value={phoneNumber}
                            onChange={(e) => setphoneNumber(e.target.value)}
                            required
                        />
                        <input 
                            type="date" 
                            className="text_box"
                            placeholder="Hire date"
                            value={hireDate}
                            onChange={(e) => sethireDate(e.target.value)}
                            required
                        />
                        <input 
                            type="test" 
                            className="text_box"
                            placeholder="Job title"
                            value={jobTitle}
                            onChange={(e) => setjobTitle(e.target.value)}
                            required
                        />
                        <input 
                            type="test" 
                            className="text_box"
                            placeholder="Department Id"
                            value={departmentID}
                            onChange={(e) => setdepartmentID(e.target.value)}
                            required
                        />
                        <input 
                            type="test" 
                            className="text_box"
                            placeholder="Salary"
                            value={salary}
                            onChange={(e) => setsalary(e.target.value)}
                            required
                        />
                        <button className="button">
                            Add
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddUser;