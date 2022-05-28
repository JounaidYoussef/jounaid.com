import "./index.scss"
import React from "react"
import Linkedin from "../../assets/Linkedin"
import Github from "../../assets/Github"
import Twitter from "../../assets/Twitter"
import Behance from "../../assets/Behance"
import Dribbble from "../../assets/Dribbble"
import Codepen from "../../assets/Codepen"

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
      <a
        className="icon"
        target="_blank"
        href="https://dribbble.com/jounaidyoussef"
      >
        <Codepen fill={fill} />
      </a>
    </div>
  )
}

export default SocialBar
