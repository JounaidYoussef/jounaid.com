import "./index.scss"
import React from "react"
import Github from "../../assets/github.svg"
import Web from "../../assets/web.svg"

const ProjectCard = () => {
  return (
    <div
      style={{
        width: "50%",
        backgroundColor: "#eaf0f5",
        padding: "1.8em",
        borderRadius: "20px",
      }}
    >
      <text>Hello world</text>
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
  )
}

export default ProjectCard
