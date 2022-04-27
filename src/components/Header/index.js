import Jo from "../../assets/jo.svg"
import "./index.scss"
import { Link } from "gatsby"
import React from "react"
import { navigate } from "@reach/router"

const Header = ({ iscontact }) => {
  return (
    <header className="container header">
      <div className="header-container">
        {/* <Link to="/">
        <Logo className="logo" alt="Logo" />
      </Link> */}
        <div className="links">
          <Link
            to="/"
            className="logo" // activeClassName="active"
          >
            <Jo fill={"#4c596a"} width="36px" height="36px" />
          </Link>
          <ul>
            <li>
              <li>
                <Link
                  to="/"
                  // activeClassName="active"
                  className="item"
                  aria-label="View Home page"
                >
                  Home
                </Link>
              </li>
              <Link
                to="/blog"
                // activeClassName="active"
                className="item"
                aria-label="View Blog page"
              >
                Blog
              </Link>
            </li>
            {/* <li>
              <Link
                to="/oss"
                // activeClassName="active"
                className="item"
                aria-label="View OSS page"
              >
                OSS
              </Link>
            </li> */}
            <li>
              <Link
                to="/projects"
                // activeClassName="active"
                className="item"
                aria-label="View Projects page"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                // activeClassName="active"
                className="item"
                aria-label="View About page"
              >
                About
              </Link>
            </li>
            <div className="underbar"></div>
          </ul>
          <span className="nav-indicator"></span>
        </div>
        <div className="contact">
          {!iscontact ? (
            <Link className="getintouch" to="/contact">
              Get In Touch
            </Link>
          ) : (
            <a onClick={() => history.back()} className="close">
              Close
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
