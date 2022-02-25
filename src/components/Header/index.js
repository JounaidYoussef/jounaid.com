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
      <Link
           to="/blog"
           // activeClassName="active"
           className="item"
           aria-label="View Blog page"
           >Blog</Link>
                   <Link
           to="/oss"
           // activeClassName="active"
           className="item"
           aria-label="View OSS page"
           >OSS</Link>
                   <Link
           to="/projects"
           // activeClassName="active"
           className="item"
           aria-label="View Projects page"
           >Projects</Link>
                   <Link
           to="/about"
           // activeClassName="active"
           className="item"
           aria-label="View About page"
           >About</Link>
           <span className="nav-indicator"></span>
      </div>
      <div className="contact">
      <a className="getintouch" href="#">Get In Touch</a>
      </div>
    </div>
  </header>
)
    }

export default Header