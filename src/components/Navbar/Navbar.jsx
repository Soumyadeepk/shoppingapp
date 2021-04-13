import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  });
  const [click, setClick] = useState(false);
  const showItems = () => {
    setClick(!click);
  };

  return (
    <div className="navbar" data-aos="fade-down">
      <ul className="menuitems">
        <li>
          <NavLink
            className="listitem"
            to="/men"
            activeClassName="activelistnav"
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            className="listitem"
            to="/womentshirt"
            activeClassName="activelistnav"
          >
            Women
          </NavLink>
        </li>
      </ul>
      <h1 className="logo">
        <NavLink to="/" className="headerlink">
          S.
        </NavLink>
      </h1>
      <div className="mobile-menu" onClick={showItems}>
        <i className="fas fa-bars fa-x"></i>
      </div>

      <ul className={click ? "menu-active menu" : "menu-hide menu"}>
        <li className="closebtn" onClick={showItems}>
          <i class="fas fa-times fa-2x"></i>
        </li>
        <li>
          <NavLink
            to="/wishlist"
            className="menu-item"
            onClick={showItems}
            activeClassName="activelistnav"
          >
            Wish
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="menu-item"
            onClick={showItems}
            activeClassName="activelistnav"
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="menu-item"
            onClick={showItems}
            activeClassName="activelistnav"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
