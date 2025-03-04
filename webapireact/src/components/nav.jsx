import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import './nav.css'
const Navbar = () => {
  const [profiledropdown, setprofiledropdown] = useState(false);
  const [manangedropdown , setmanagedropdown] = useState(false);
  const user = {
    name: "Tirth Patel",
    email: "tirth@gmail.com",
  };

  return (
    <nav className="navbar">

      <div className="nav_links">
        <Link to="/home" className="nav_link">Home</Link>
        <Link to="/search" className="nav_link">Search</Link>
        <div className="">
        <Link 
          className="nav_link" 
          onClick={() => setmanagedropdown(!manangedropdown)}
        >Manage User</Link>
        {manangedropdown && (
          <div className="manageuser_dropdown">
            <Link to="/adduser" className="dropdown_item">Add User</Link>
            <Link to="/edituser" className="dropdown_item">Edit User</Link>
            <Link to="/deleteuser" className="dropdown_item">Delete User</Link>
          </div>
        )}
        </div>
      </div>

     
      <div className="user_section">
        <FaUserCircle 
          className="user_icon" 
          onClick={() => setprofiledropdown(!profiledropdown)}
        />
        {profiledropdown && (
          <div className="dropdown">
            <p className="dropdown_item">{user.name}</p>
            <p className="dropdown_item">{user.email}</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
