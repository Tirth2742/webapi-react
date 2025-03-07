import { useState } from "react";
import Navbar from "./nav";
import axios from "axios";
const EditUser = () =>{
    const[employeeID, setEmployeeID] = useState(0); 
    const[firstName , setfirstName] = useState("");
    const[lastName , setlastName] = useState("");
    const[email , setemail] = useState("");
    const[phoneNumber , setphoneNumber] = useState("");
    const[hireDate , sethireDate] = useState("");
    const[jobTitle , setjobTitle] = useState("");
    const[departmentID , setdepartmentID] = useState("");
    const[salary , setsalary] = useState("");
    const [searchq, setSearch] = useState("");
    const [data, setData] = useState([]);

const searchQuery = async (e) => {
    e.preventDefault();
    console.log(searchq);

    try {
        const resp = await axios.get(`https://localhost:7026/api/Employee/${searchq}`);
        console.log(resp.data);

        const result = Array.isArray(resp.data) ? resp.data[0] : resp.data;

        if (!result) {
            alert("User not found");
            return;
        }


        setData(result);


        setEmployeeID(result.employeeID || 0);
        setfirstName(result.firstName || "");
        setlastName(result.lastName || "");
        setemail(result.email || "");
        setphoneNumber(result.phoneNumber || "");
        sethireDate(result.hireDate ? new Date(result.hireDate).toISOString().split("T")[0] : "");
        setjobTitle(result.jobTitle || "");
        setdepartmentID(result.departmentID || "");
        setsalary(result.salary || "");

    } catch (err) {
        console.error(err);
        alert("User not found or invalid search query");
    }
};

    const editForm = async (e) => {
        e.preventDefault();
    
        const updatedEmployee = {
            employeeID,
            firstName,
            lastName,
            email,
            phoneNumber,
            hireDate: `${hireDate}T00:00:00`,
            jobTitle,
            departmentID: parseInt(departmentID, 10),
            salary: parseFloat(salary),
        };
    
        console.log("Updated Employee Data Before Sending:", updatedEmployee);
    
        try {
            const response = await axios.put(
                `https://localhost:7026/api/Employee/${employeeID}`, 
                updatedEmployee,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
    
            console.log("API Response:", response.data);
            alert("Employee details updated successfully");
    
            
            
        } catch (err) {
            console.error("Error updating employee:", err.response ? err.response.data : err);
            alert("Error updating employee details");
        }
    };
    
    
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="container2">
                    <form className="form" onSubmit={searchQuery}>
                    <input 
                        type="text" 
                        className="text_box" 
                        value={searchq}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />
                    <button className="button" type="submit">
                        Search
                    </button>
                </form>
                    <form action="" className="login_form" onSubmit={editForm}>
                        <input 
                            type="text" 
                            className="text_box"
                            placeholder={firstName}
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                            required
                        />
                        <input 
                            type="text" 
                            className="text_box"
                            placeholder={lastName}
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                            required
                        />
                        <input 
                            type="email" 
                            className="text_box"
                            placeholder={email}
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                        <input 
                            type="text" 
                            className="text_box"
                            placeholder={phoneNumber}
                            value={phoneNumber}
                            onChange={(e) => setphoneNumber(e.target.value)}
                            required
                        />
                        <input 
                            type="date" 
                            className="text_box"
                            placeholder={hireDate}
                            value={hireDate}
                            onChange={(e) => sethireDate(e.target.value)}
                            required
                        />
                        <input 
                            type="test" 
                            className="text_box"
                            placeholder={jobTitle}
                            value={jobTitle}
                            onChange={(e) => setjobTitle(e.target.value)}
                            required
                        />
                        <input 
                            type="test" 
                            className="text_box"
                            placeholder={departmentID}
                            value={departmentID}
                            onChange={(e) => setdepartmentID(e.target.value)}
                            required
                        />
                        <input 
                            type="test" 
                            className="text_box"
                            placeholder={salary}
                            value={salary}
                            onChange={(e) => setsalary(e.target.value)}
                            required
                        />
                        <button className="button">
                            Edit
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditUser;