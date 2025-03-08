import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./nav.css";

const Navbar = () => {
  const [profiledropdown, setProfileDropdown] = useState(false);
  const [managedropdown, setManageDropdown] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [username , setUsername] = useState("");
  const [useremail , setUseremail] = useState("");


  useEffect(() => {
    const role = localStorage.getItem("userRole"); 
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail"); 
    setUserRole(role);
    setUseremail(email);
    setUsername(name);
  }, []);

  const user = {
    name: username,
    email: useremail,
  };
  const handleLogout = () => {
    // Clear user session data from localStorage
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    // Navigate to login page
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav_links">
        <Link to="/home" className="nav_link">
          Home
        </Link>
        <Link to="/search" className="nav_link">
          Search
        </Link>

        
        {userRole === "admin" && (
          <div>
            <Link
              className="nav_link"
              onClick={() => setManageDropdown(!managedropdown)}
            >
              Manage User
            </Link>
            {managedropdown && (
              <div className="manageuser_dropdown">
                <Link to="/adduser" className="dropdown_item">
                  Add User
                </Link>
                <Link to="/edituser" className="dropdown_item">
                  Edit User
                </Link>
                <Link to="/deleteuser" className="dropdown_item">
                  Delete User
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="user_section">
        <FaUserCircle
          className="user_icon"
          onClick={() => setProfileDropdown(!profiledropdown)}
        />
        {profiledropdown && (
          <div className="dropdown">
            <p className="dropdown_item">{user.name}</p>
            <p className="dropdown_item">{user.email}</p>
            <button className="logout-button" >
              <Link to="/" >
                Logout
              </Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
