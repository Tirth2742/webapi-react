import { useState } from "react";
import Navbar from "./nav";
import axios from "axios";
import "./deleteuser.css";
const DeleteUser = () =>{
    const [searchq, setSearch] = useState("");
    const [employee, setEmployee] = useState(null);


    const searchQuery = async (e) => {
        e.preventDefault();

        setEmployee(null);
        
        try {
            const resp = await axios.get(`https://localhost:7026/api/Employee/${searchq}`);
            setEmployee(resp.data);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteUser = async () => {
        if (!employee) return;
        
        try {
            await axios.delete(`https://localhost:7026/api/Employee/${employee.employeeID}`);
            alert("User deleted successfully");
            setEmployee(null);
            setSearch("");
        } catch (err) {
            console.error(err);
            alert("Error deleting user");
        }
    };
    return(
        <div>
            <Navbar />
            <div className="container">
                <form className="form" onSubmit={searchQuery}>
                    <input 
                        type="text" 
                        className="text_box" 
                        placeholder="Enter Employee ID"
                        value={searchq}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />
                    <button className="button" type="submit">
                        Search
                    </button>
                </form>
                
                {employee && (
                    <div className="employee-details">
                        <h3>Employee Details</h3>
                        <p><strong>ID:</strong> {employee.employeeID}</p>
                        <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
                        <p><strong>Email:</strong> {employee.email}</p>
                        <p><strong>Job Title:</strong> {employee.jobTitle}</p>
                        <button className="delete-button" onClick={deleteUser}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default DeleteUser;