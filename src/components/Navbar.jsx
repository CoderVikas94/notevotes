import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {}, [location]);

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    Navigate('/login')

  }
  const handleLogin = ()=>{
    localStorage.removeItem('token');
    Navigate('/login')

  }
  const handleSignup = ()=>{
    localStorage.removeItem('token');
    Navigate('/signup')

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  <AiFillHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mx-5">
         {!localStorage.getItem('token') &&
         <>
         <button
            className={`btn  text-white   me-md-2 bg-${
              location.pathname === "/login"
                ? "info"
                : "dark"
            }`}
            type="button"
            onClick={handleLogin}          >
            LogIn
          </button>
              <button
              className={`btn  info text-white me-md-2 bg-${
                location.pathname === "/signup" ? "info" : "dark"
              }`}
              type="button"
              onClick={handleSignup}          
            >
            
                SignUp
            </button>
            </>
            }
          {localStorage.getItem('token') &&<button
            className={`btn  info text-white me-md-2 bg-${
              location.pathname === "/signup" ? "info" : "dark"
            }`}
            type="button"
            onClick={handleLogout}          
          >
            
              LogOut
          </button>}
      
        </div>
      </nav>
    </>
  );
};

export default Navbar;
