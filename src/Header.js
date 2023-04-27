import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="../amazonlogo3.png"
          alt="amazonLogo"
        />
      </Link>
      {/* search box */}
      <input type="text" className="header__searchInput" />>{/* 3 links */}
      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
