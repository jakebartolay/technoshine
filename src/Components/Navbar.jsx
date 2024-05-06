import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle ? `${pageTitle} | TECHNOSHINE` : "TECHNOSHINE";
  }, [location]);

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About Us";
      case "/contact":
        return "Contact Us";
      default:
        return "";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="../technoshine.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
          <span className="ms-2 gradient-text"><strong>TECHNOSHINE</strong></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link className="nav-link" to="/"><strong style={{color: "gray"}}>Home</strong></Link>
            </li>
            <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
              <Link className="nav-link" to="/about"><strong style={{color: "gray"}}>About Us</strong></Link>
            </li>
            <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
              <Link className="nav-link" to="/contact"><strong style={{color: "gray"}}>Contact Us</strong></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
