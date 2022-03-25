import Behance from "../../assets/behance.svg"
import Dribbble from "../../assets/dribbble.svg"
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
import Twitter from "../../assets/twitter.svg"
import "./index.scss"
import React from "react"

const SocialBar = ({ fill }) => {
  return (
    <div className="social-icons">
      <a
        className="icon"
        target="_blank"
        href="https://www.linkedin.com/in/jounaidyoussef/"
      >
        <Linkedin fill={fill} />
      </a>
      <a
        className="icon"
        target="_blank"
        href="https://github.com/JounaidYoussef"
      >
        <Github fill={fill} />
      </a>
      <a
        className="icon"
        target="_blank"
        href="https://twitter.com/JounaidYoussef"
      >
        <Twitter fill={fill} />
      </a>
      <a
        className="icon"
        target="_blank"
        href="https://www.behance.net/jounaidyoussef"
      >
        <Behance fill={fill} />
      </a>
      <a
        className="icon"
        target="_blank"
        href="https://dribbble.com/jounaidyoussef"
      >
        <Dribbble fill={fill} />
      </a>
    </div>
  )
}

export default SocialBar
