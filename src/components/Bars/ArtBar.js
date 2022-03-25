import Instagram from "../../assets/instagram.svg"
import Tiktok from "../../assets/tiktok.svg"
import Unsplash from "../../assets/unsplash.svg"
import Youtube from "../../assets/youtube.svg"
import "./index.scss"
import React from "react"

const ArtBar = ({ fill }) => {
  return (
    <div className="social-icons">
      <a
        className="icon"
        target="_blank"
        href="https://www.instagram.com/iamyoussefjounaid/"
      >
        <Instagram fill={fill} />
      </a>
      {/* to add link later */}
      <a
        className="icon"
        target="_blank"
        href="https://unsplash.com/@jounaidyoussef"
      >
        <Youtube fill={fill} />
      </a>
      <a
        className="icon"
        target="_blank"
        href="https://unsplash.com/@jounaidyoussef"
      >
        <Unsplash fill={fill} />
      </a>
      {/* to add link later */}
      <a
        className="icon"
        target="_blank"
        href="https://unsplash.com/@jounaidyoussef"
      >
        <Tiktok fill={fill} />
      </a>
    </div>
  )
}

export default ArtBar
