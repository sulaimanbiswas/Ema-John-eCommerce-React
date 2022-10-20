import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const logoutHandler = () => {
    logOut()
      .then(() => setSuccess("Log out successful"))
      .catch((error) => setError(error.message));
  };
  return (
    <nav className="header">
      <Link to="/">
        <img className="" src={logo} alt="" />
      </Link>
      <div className="nav-links">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/order-review">Order Review</NavLink>
        <NavLink to="/manage-inventory">Manage Inventory</NavLink>
        <NavLink to="/about">About</NavLink>

        {!user?.uid ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/Signup">Sign Up</NavLink>
          </>
        ) : (
          <Link onClick={logoutHandler} to="/">
            Log Out
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
