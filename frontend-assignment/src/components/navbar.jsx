import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img src={logo} alt="Logo" /> */}
          <span className="logo-text">
            IMPERIAL <small>GRAND HOTEL</small>
          </span>
        </div>
        <ul className="navbar-menu">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICE</li>
           <li
            className="navbar-dropdown"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            PAGES
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleNavigation("/room")}>ROOM</li>
                <li onClick={() => handleNavigation("/single-room")}>
                  SINGLE ROOM
                </li>
              </ul>
            )}
          </li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
