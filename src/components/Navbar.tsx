import {  useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const [click, menuClick] = useState(false);

  const handleMenuClick = () => menuClick(!click)
  const closeMobileMenu = () => menuClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu }>
            <i className="fa-solid fa-laptop-code"></i>
          </Link>

          {/* MENU */}
          <div className="menu-icon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-times" : "fa fa-bars"}></i>
          </div>

          {/* HOME Nav */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

          {/* Works Nav */}
            <li className="nav-item">
              <Link
                to="/Works"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Works
              </Link>
            </li>

            {/* Skills Nav */}
            <li className="nav-item">
              <Link
                to="/Skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>

          {/* About me Nav */}
            <li className="nav-item">
              <Link
                to="/AboutMe"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

