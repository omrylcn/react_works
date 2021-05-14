import React from "react";
import "./Navbar.css" ;
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
      <div className="container">
        <a className="navbar-brand">J-Blog</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><i class="fa fa-info" aria-hidden="true"></i> Info</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/omrylcn" className="nav-link" target="_blank"><i className="fa fa-github"></i> Github</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;