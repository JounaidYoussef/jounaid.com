import Unsplash from "../../assets/unsplash.svg"
import Youtube from "../../assets/youtube.svg"
import "./index.scss"
import React from "react"

const ArtBar = ({ fill }) => {
  return (
    <div className="social-icons">
      {/* to add link later */}
      <a
        className="icon"
        target="_blank"
        href="https://www.youtube.com/channel/UCaQ4mey5SSJ11eLlWeb1GPg"
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
    </div>
  )
}

export default ArtBar
