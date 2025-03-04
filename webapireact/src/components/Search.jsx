import { useState } from "react";
import Navbar from "./nav";
import axios from "axios";
import "./search.css";

const Search = () => {
    const [searchq, setSearch] = useState("");
    const [data, setData] = useState([]);

    const searchQuery = async (e) => {
        e.preventDefault();
        console.log(searchq);
        try {
            const resp = await axios.get(`https://localhost:7026/api/Employee/${searchq}`);
            console.log(resp.data);
            const result = Array.isArray(resp.data) ? resp.data : [resp.data];
            setData(result);
        
            console.log(result);
            result.map((e) => console.log(e));
        } catch (err) {
            console.log(err);
            alert("User not found or invalid search query");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
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

                <div className="display">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Hire Date</th>
                                <th>Job Title</th>
                                <th>Salary</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.employeeID}>
                                    <td>{item.employeeID}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.hireDate}</td>
                                    <td>{item.jobTitle}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.department?.departmentName || "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Search;
