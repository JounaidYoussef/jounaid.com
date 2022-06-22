// import "./index.scss"
// import { Link } from "gatsby"
// import React from "react"
// import { navigate } from "@reach/router"
// import MobileNav from "./MobileNav"
// import Links from "./Links"

// const Header = ({ iscontact }) => {
//   return (
//     <header className="container header">
//       <div className="header-container">
//         {/* <Link to="/">
//         <Logo className="logo" alt="Logo" />
//       </Link> */}
//         <Links iscontact={iscontact} />
//         <MobileNav iscontact={iscontact} />
//       </div>
//     </header>
//   )
// }

// export default Header

import { Link } from "gatsby"
import React from "react"
import Jo from "../../assets/Jo"
import "./index.scss"

const Header = ({ iscontact }) => (
  <header className="header">
    <div className="css-icons-sttl">
      <Link to="/">
        <Jo />
      </Link>
    </div>
    <div className="dropdown-menu">
      <input type="checkbox" id="checkbox" />
      <label id="burger" htmlFor="checkbox">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </label>
      <div className="menu-content">
        <ul className="test">
          <li>
            <Link
              to="/"
              // activeClassName="active"
              className="menu_element"
              aria-label="View Home page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              // activeClassName="active"
              className="menu_element"
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
              className="menu_element"
              aria-label="View Projects page"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              // activeClassName="active"
              className="menu_element"
              aria-label="View About page"
            >
              About
            </Link>
          </li>
          <li className="contact">
            {!iscontact ? (
              <Link className="getintouch" to="/contact">
                Contact
              </Link>
            ) : (
              <a onClick={() => history.back()} className=" close">
                Close
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
