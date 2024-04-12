import { FC, useState } from "react";
import cart from "../../../img/shopping-cart.png";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Categories from "../Categories/Categories";

const Nav: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header className="header" id="header">
      <nav className="Navbar Container">
        <a href="./index.html" className="brand d-flex align-items-center">
          <img src={cart} alt="livecart" id="logo" className="me-2" />
          <span>Live Cart</span>
        </a>
        <div className="burger" id="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <span
          className={`overlay ${isActive ? "is-active" : ""}`}
          onClick={toggleMenu}
        ></span>
        <div id="menu" className={`menu ${isActive ? "is-active" : ""}`}>
          {/*       <ul className="menu-inner">
            {links.map((link) => (
              <li key={link.id} className="menu-item" onClick={closeMenu}>
                <a href={link.href} className="menu-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul> */}
          <div className="header-search-wrapper submit-wrapper d-flex justify-content-between">
            <input
              type="search"
              name="q1"
              id="q1"
              placeholder="Search..."
              value=""
            />
            <button className="btn" title="search" type="submit">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </div>
        <div className="header-contact d-lg-flex d-flex align-items-center">
          <a
            className="header-icon mr-0"
            href="/react/porto/demo37/pages/login/"
          >
            <i className="bx bx-user"></i>
          </a>
          <h6 className="text-capitalize d-none d-lg-block">
            <a href="/react/porto/demo37/pages/login/">Sign In / Register</a>
          </h6>
          <div className="dropdown cart-dropdown mx-2">
            <a
              href="#"
              title="Cart"
              className="dropdown-toggle dropdown-arrow cart-toggle"
            >
              <i className="bx bx-shopping-bag"></i>
              <span className="cart-count badge-circle">0</span>
            </a>
            <div className="cart-overlay"></div>
            <div className="dropdown-menu mobile-cart">
              <a href="#" title="Close (Esc)" className="btn-close">
                ×
              </a>
              <div className="dropdownmenu-wrapper">
                <div className="dropdown-cart-header">Shopping Cart</div>
                <p className="pt-3 mt-2">No products in the cart.</p>
              </div>
            </div>
          </div>
          <SearchBar />
        </div>
      </nav>
      <Categories />
    </header>
  );
};

export default Nav;
