import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration = () => {
    const[userID , setUserId] = useState("");
    const[name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const[rpassword , setRPassword] = useState("");
    const[isAdmin , setIsAdmin] = useState("");
    const navigate = useNavigate();
    const signup  = async (e)=>{
        e.preventDefault();
        const newuser = {
            adminID: 0,  
            userID,
            name,
            email,
            password,
            isAdmin : parseInt(isAdmin, 10)
        };
        console.log(newuser)
        try {
            const response = await axios.post(
                "https://localhost:7026/api/Admin",
                newuser,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log(response)
            alert("sign up successfully")
            navigate("/")
        } catch (err) {
            alert(err)
            console.error(err);
        }
    }
    return(
        <div className="container">
            <div className="container2">
                <form action="" className="login_form" onSubmit={signup}>
                    <input 
                        type="text"
                        placeholder="UserID"
                        className="text_box"
                        value={userID}
                        onChange={(e)=>setUserId(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        placeholder="Name"
                        className="text_box"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />
                    <input 
                        type="email"
                        placeholder="email"
                        className="text_box"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        placeholder="Password"
                        className="text_box"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        placeholder="Rewrite Password"
                        className="text_box"
                        value={rpassword}
                        onChange={(e)=>setRPassword(e.target.value)}
                        required
                    />
                    <select
                        className="text_box"
                        value={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.value)}
                        required
                    >
                        <option value="1">Admin</option>
                        <option value="0">User</option>
                    </select>

                    <button type="submit" className="button" >
                        Sign Up
                    </button>
                </form>

            </div>
        </div>
    )
}
export default Registration