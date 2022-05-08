import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"

export default () => {
  return (
    <div className="work-container icenter col">
      <h2>Featured Work</h2>
      <div className="row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
