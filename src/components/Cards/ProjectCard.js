import "./index.scss"
import React from "react"
// import Github from "../../assets/github.svg"
// import Web from "../../assets/web.svg"
// import Copylink from "../../assets/copylink.svg"
// import Checkmark from "../../assets/checkmark.svg"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProjectCard = () => {
  return (
    <Link
      to="/blog"
      style={{
        // width: "50%",
        padding: "1.6em",
        margin: "0.8em",
        borderRadius: "20px",
        maxWidth: "320px",
      }}
    >
      <div className="im">
        <StaticImage
          src="../../assets/webpr.png"
          alt="Project"
          width={300}
          imgStyle={{ borderRadius: "10px" }}
        />
        {/* <a href="#" className="copylink">
          <Copylink width="10px" height="10px" />
          <Checkmark width="12px" height="12px" />
        </a> */}
      </div>

      <div className="col">
        <text style={{ fontSize: "20px", fontWeight: 600 }}>Hello world</text>
        <text style={{ fontSize: "12px", fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas
          diam ut ipsum gravida lacinia.
        </text>
        {/* <div>
          <a
            className="icon"
            target="_blank"
            href="https://github.com/JounaidYoussef"
          >
            <Github fill="#4C596A" height="18" width="18" />
          </a>
          <a
            className="icon"
            target="_blank"
            href="https://github.com/JounaidYoussef"
          >
            <Web />
          </a>
        </div> */}
      </div>
    </Link>
  )
}

export default ProjectCard
