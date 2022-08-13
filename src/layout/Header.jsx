import React from "react";

import logo from "../images/logo.svg";
import downArrow from "../images/icon-arrow-down.svg";

import todo from "../images/icon-todo.svg";
import calender from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

import mobileMenu from "../images/mobile-menu.png";

import "../styles/header.scss";
const Header = () => {
  const [isOpenFeature, setIsOpenFeature] = React.useState(false);
  const [isOpenCompany, setIsOpenCompany] = React.useState(false);

  const [active, setActive] = React.useState(false);
  return (
    <>
      <nav className="header">
        <div className={`header__menu ${active && "active"}`}>
          <div className="header__logo">
            <img src={logo} alt="snap logo" />
          </div>
          <ul>
            <li onClick={() => setIsOpenFeature(!isOpenFeature)}>
              <a href="#">features</a>
              <img src={downArrow} alt="down arrow" />
              {isOpenFeature && (
                <ul className="header__submenu">
                  <li>
                    <img src={todo} /> Todo list
                  </li>
                  <li>
                    <img src={calender} /> Calender
                  </li>
                  <li>
                    <img src={reminders} /> Reminders
                  </li>
                  <li>
                    <img src={planning} /> Planning
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => setIsOpenCompany(!isOpenCompany)}>
              <a href="#">Company</a> <img src={downArrow} alt="down arrow" />
              {isOpenCompany && (
                <ul className="header__submenu">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              )}
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="header__btn">
          <button>Login</button>
          <button>Register</button>
        </div>
        </div>
      </nav>

      <label
        htmlFor="click"
        className={`header__mobile-menu`}
        onClick={() => setActive(!active)}
      >
        {active ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </label>
    </>
  );
};

export default Header;
