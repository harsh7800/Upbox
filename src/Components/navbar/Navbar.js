import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../Assets/Logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  const [active, setActive] = useState("false")
  return (
    <nav className="navbar-wrapper">
      <img src={logo} alt="*Logo" />
      <div className={active ? "navbar-container" : "navbar-container show"}>
        <Link id="navbtn" to="/this-mmonth">
          THIS-MONTH
        </Link>
        <Link id="navbtn" to="/skin">
          SKIN
        </Link>
        <Link id="navbtn" to="/hair">
          HAIR
        </Link>
        <Link id="navbtn" to="/bath">
          BATH
        </Link>
        <Link id="navbtn" to="/sale">
          SALE
        </Link>
        <button>
          LOG IN <i id="angle-right" className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <i onClick={() => setActive(!active)} id="menuBtn">
        {active ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-times"></i>
        )}
      </i>
    </nav>
  );
}

export default Navbar