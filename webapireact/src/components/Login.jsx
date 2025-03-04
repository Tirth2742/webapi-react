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
      if (resp.data) {
        console.log("Login successful");
        navigate("/Home"); 
      }
      else{
        console.log("else")
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password"); 
    }
  };

  return (
    <div className="container">
      <div className="login_container">
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
        </form>
      </div>
    </div>
  );
};

export default Login;
