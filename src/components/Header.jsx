import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo with image */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://nextrarecruitment.com/wp-content/uploads/2024/05/cropped-image4-2048x820.png"
            alt="GUVI Logo"
            style={{ height: "40px", marginRight: "8px" }}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/live-classes">Live Classes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/practice">Practice</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-success px-3" to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
