import React from "react"
import { Link } from "gatsby"
import "./index.scss"
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"
import Dribbble from "../../assets/dribbble.svg"
import SocialBar from "../Bars/SocialBar"

const Footer = () => {
  return(
  <footer className="container-footer">
      {/* <Link to="/">
        <Logo className="logo" alt="Logo" />
      </Link> */}
      <div className="footer-links">
        <p className="footer-catch">Got a project? Let’s talk</p>
      <div className="contact">
      <a className="getintouch" href="#">Leave a Message</a>
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