import React from "react"
import { Link } from "gatsby"
import "./index.scss"
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"
import Dribbble from "../../assets/dribbble.svg"

const Footer = () => {
  return(
  <footer className="container-footer">
      {/* <Link to="/">
        <Logo className="logo" alt="Logo" />
      </Link> */}
      <div className="links">
        <p>Got a project? Let’s talk</p>
      <div className="contact">
      <a className="getintouch" href="#">Leave a Message</a>
      </div>
      <div className="social-icons">
      <a
      href="https://www.linkedin.com/in/jounaidyoussef/">
      <Linkedin />
    </a>
    <a
      href="https://github.com/JounaidYoussef">
      <Github />
    </a>
    <a
      href="https://podcasts.apple.com/us/podcast/geeksblabla/id1449493227">
      <Twitter />
    </a>
    <a
      href="https://podcasts.apple.com/us/podcast/geeksblabla/id1449493227">
      <Instagram />
    </a>
    <a
      href="https://podcasts.apple.com/us/podcast/geeksblabla/id1449493227">
      <Dribbble />
    </a>
      </div>
      </div>


  </footer>
  )
}

export default Footer