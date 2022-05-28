import "./index.scss"
import React from "react"
import Youtube from "../../assets/Youtube"
import Unsplash from "../../assets/Unsplash"

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
