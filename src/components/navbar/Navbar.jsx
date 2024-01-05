import { React, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/textxtract2.0.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return (
      <>
        <RouterLink to="/">
          <p>
            <a></a>Home
          </p>
        </RouterLink>
        <ScrollLink
          activeClass="active"
          to="xtract-about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          <p>
            <a href="#features"></a>Features
          </p>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>
            <a href="#faq"></a>FAQs
          </p>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>
            <a href="#possibility"></a>Contact
          </p>
        </ScrollLink>
      </>
    );
  };
  return (
    <div className="gpt3__navbar" id="navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-logo">
          <RouterLink to="/">
            <h1 className="gpt3__navbar-logo-text">TextXtract</h1>
          </RouterLink>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <ScrollLink
          activeClass="active"
          to="cta"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          <button type="button">Try Our Demo</button>
        </ScrollLink>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Log In</p>
                <button type="button">Request A Demo</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
