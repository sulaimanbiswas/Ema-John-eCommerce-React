import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img className="" src={logo} alt="" />
      </Link>
      <div className="nav-links">
        <Link to="/shop">Shop</Link>
        <Link to="/order-review">Order Review</Link>
        <Link to="/manage-inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
