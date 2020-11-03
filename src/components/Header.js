import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();

  return (
    
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
        About
      </Link>
    </li>
    
    <li className="nav-item">
      <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        Contact
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
        Projects
      </Link>
    </li>
    
  </ul>
  
);

<div>

<h1> Michael Shattuck</h1>

</div>


}

export default Header;
