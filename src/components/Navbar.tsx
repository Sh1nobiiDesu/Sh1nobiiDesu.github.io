import {  useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {

  const [click, menuClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleMenuClick = () => menuClick(!click)
  const closeMobileMenu = () => menuClick(false)

  const location = useLocation()
  const currentPath = location.pathname
  console.log(currentPath == '/' ? "hi" : "hello")

  const showBTN = () => {
    if(window.innerWidth <= 960)
      setButton(false)
    else
      setButton(true)
  }


  useEffect(() => {
    showBTN()
  }, [])

  window.addEventListener("resize", showBTN)

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

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* HOME Nav */}
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${currentPath === '/' ? "current-page" : ""}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

          {/* Works Nav */}
            <li className="nav-item">
              <Link
                to="/Works"
                className={`nav-links ${currentPath === '/Works' ? "current-page" : ""}`}
                onClick={closeMobileMenu}
              >
                Works
              </Link>
            </li>

            {/* Skills Nav */}
            <li className="nav-item">
              <Link
                to="/Skills"
                className={`nav-links ${currentPath === '/Skills' ? "current-page" : ""}`}
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>

          {/* About me Nav */}
            <li className="nav-item">
              <Link
                to="/AboutMe"
                className={`nav-links ${currentPath === '/AboutMe' ? "current-page" : ""}`}
                onClick={closeMobileMenu}
              >
                About me
              </Link>
            </li>

            {!button && <li className="nav-item">
              <a href="/Resume_MarkTangon.pdf" download={"Resume_MarkTangon.pdf"} className="nav-links" onClick={closeMobileMenu}>
                Resume
              </a>
              
            </li>}
          </ul>
          {button && <Button buttonStyle="btn--outline" >Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

