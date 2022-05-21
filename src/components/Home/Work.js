import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"
import DrawnArrow from "../../assets/drawnArrow.svg"
import { transform } from "typescript"
import { Link } from "gatsby"

export default () => {
  return (
    <div className="work-container icenter col">
      <h2>Featured Work</h2>
      <div className="row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Link
        to="/projects"
        // activeClassName="active"
        className="see-all"
      >
        <div>See all projects </div>
        <div style={{ transform: "rotate(90deg)", marginLeft: "4px" }}>
          <DrawnArrow height="24px" width="24px" fill="#527693" />
        </div>
      </Link>
    </div>
  )
}
