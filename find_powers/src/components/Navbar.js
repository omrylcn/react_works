import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand  flex-column flex-md-row bd-navbar n-custom" >
      <div className="container-fluid px-5">
        <a className="navbar-brand">
          <Link to="/">
            <img className="img-fluid i-custom" src={logo} alt="" />
          </Link>
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/">
              <a class="nav-link active a-custom">Home</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about">
              <a class="nav-link active a-custom">About</a>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );

};

export default Navbar;

