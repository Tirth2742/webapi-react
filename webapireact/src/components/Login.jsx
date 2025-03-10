import {  useState } from "react";
import './Login.css'
import Home from "./Home";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    console.log( email,  password);
    
    try {
      const resp = await  axios.get(`https://localhost:7026/api/Admin/${email}/${password}`);
      console.log(resp)
      if (resp.data==1) {
        console.log("Login successful");
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("userEmail",email );
        localStorage.setItem("userName", "admin");
        navigate("/Home"); 
      }
      else{
        console.log("Login successful");
        localStorage.setItem("userRole", "user");
        navigate("/Home");
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password"); 
    }
  };

  return (
    <div className="container">
      <div className="container2">
        <h2 className="heading">Login</h2>
        <form onSubmit={submitForm} className="login_form">
          <input
            type="email"
            placeholder="Email"
            className="text_box"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="text_box"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="button"
          >
            Login
          </button>
          <a href="/registration" className=""> sign up </a>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
