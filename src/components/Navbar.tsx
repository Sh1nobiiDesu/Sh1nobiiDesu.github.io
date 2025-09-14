import {  useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {

  const [click, menuClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleMenuClick = () => menuClick(!click)
  const closeMobileMenu = () => menuClick(false)

  const showBTN = () => {
    if(window.innerWidth <= 960)
      setButton(false)
    else
      setButton(true)
  }

  const downloadResume = () => {
    const download = document.createElement("a")
    download.href = "/Resume_MarkTangon.pdf"
    download.download = "Resume_MarkTangon.pdf"
    download.click
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

            {!button && <li className="nav-item">
              <a href="/Resume_MarkTangon.pdf" download={"Resume_MarkTangon.pdf"} className="nav-links" onClick={closeMobileMenu}>
                Resume
              </a>
              
            </li>}
          </ul>
          {button && <Button buttonStyle="btn--outline" onClick={downloadResume}>Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

