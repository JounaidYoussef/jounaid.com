import "./index.scss"
import React from "react"
import Github from "../../assets/github.svg"
import Web from "../../assets/web.svg"
import { StaticImage } from "gatsby-plugin-image"

const ProjectCard = () => {
  return (
    <div
      style={{
        // width: "50%",
        backgroundColor: "#eaf0f5",
        padding: "1.6em",
        margin: "0.8em",
        borderRadius: "20px",
        maxWidth: "320px",
      }}
    >
      <StaticImage
        src="../../assets/webpr.png"
        alt="Project"
        width={300}
        imgStyle={{ borderRadius: "10px" }}
      />
      <div className="col">
        <text style={{ fontSize: "20px", fontWeight: 600 }}>Hello world</text>
        <text style={{ fontSize: "12px", fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas
          diam ut ipsum gravida lacinia.
        </text>
        <div>
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
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
