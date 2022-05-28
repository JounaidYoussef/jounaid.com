import SocialBar from "../Bars/SocialBar"
import "./index.scss"
import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <footer className="container-footer">
      {/* <Link to="/">
        <Logo className="logo" alt="Logo" />
      </Link> */}
      <div className="footer-links">
        <p className="footer-catch">Got a project? Let’s talk</p>
        <div className="contact">
          <Link className="getintouch" to="/contact">
            Get In Touch
          </Link>
        </div>
        <SocialBar fill="#FFFFFF" />
        {/* <div className="social-icons">
      <a
      className="icon"
      href="https://www.linkedin.com/in/jounaidyoussef/">
      <Linkedin />
    </a>
    <a
      className="icon"
      href="https://github.com/JounaidYoussef">
      <Github />
    </a>
    <a
      className="icon"
      href="https://twitter.com/JounaidYoussef">
      <Twitter />
    </a>
    <a
      className="icon"
      href="https://www.instagram.com/iamyoussefjounaid/">
      <Instagram />
    </a>
    <a
      className="icon"
      href="https://dribbble.com/jounaidyoussef">
      <Dribbble />
    </a>
      </div> */}
      </div>
    </footer>
  )
}

export default Footer
