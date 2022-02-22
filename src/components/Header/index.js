import React from "react"
import { Link } from "gatsby"
// import "./index.scss"

const Header = () => (
  <header className="container header">
    <div className="header-container">
      {/* <Link to="/">
        <Logo className="logo" alt="Logo" />
      </Link> */}
      <div className="menu">
      <Link
           to="/blog"
           // activeClassName="active"
           // className="item"
           aria-label="View Blog page"
           >Blog</Link>
                   <Link
           to="/oss"
           // activeClassName="active"
           // className="item"
           aria-label="View OSS page"
           >OSS</Link>
                   <Link
           to="/projects"
           // activeClassName="active"
           // className="item"
           aria-label="View Projects page"
           >Projects</Link>
                   <Link
           to="/about"
           // activeClassName="active"
           // className="item"
           aria-label="View About page"
           >About</Link>
      </div>
    </div>
  </header>
)

export default Header