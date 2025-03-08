import Login from "./components/Login";
import Home from "./components/Home";

import Search from "./components/Search"
import AddUser from "./components/adduser"
import EditUser from "./components/edituser"
import DeleteUser from "./components/deleteuser"
import { Routes, Route, BrowserRouter  } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login />}/>
        <Route path="/home" element ={<Home />}/>

        <Route path="/search" element ={<Search />}/>
        <Route path="/adduser" element = {<AddUser/>}/>
        <Route path="/edituser" element = {<EditUser/>}/>
        <Route path="/deleteuser" element = {<DeleteUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
