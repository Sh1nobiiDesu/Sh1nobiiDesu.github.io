import {  useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const [click, menuClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleMenuClick = () => menuClick(!click)
  const closeMobileMenu = () => menuClick(false)

  // const showButton = () => { 
  //   // Check if window is in mobile mode
  //   if(window.innerWidth <= 960)
  //     setButton(false)
  //   else
  //     setButton(true)
  // };

  //useEffect iis basically run this after this render (second parameter), [] means to run once on load. 
  // First parameter is what you want to run after a render
  // useEffect(() =>{
  //   showButton()
  // },[]);

  //Checks if whenever window is resized
  // window.addEventListener('resize',showButton);
  

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

