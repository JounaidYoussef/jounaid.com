import React from "react"
import { Link } from "gatsby"
import "./index.scss"

const Header = () => {
  return (
    <header className="container header">
      <div className="header-container">
        {/* <Link to="/">
        <Logo className="logo" alt="Logo" />
      </Link> */}
        <Link
          to="/"
          // activeClassName="active"
        >
          Logo
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link
                to="/blog"
                // activeClassName="active"
                className="item"
                aria-label="View Blog page"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/oss"
                // activeClassName="active"
                className="item"
                aria-label="View OSS page"
              >
                OSS
              </Link>
            </li>
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
            <div class="underbar"></div>
          </ul>
          <span className="nav-indicator"></span>
        </div>
        <div className="contact">
          <Link className="getintouch" to="/contact">
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
