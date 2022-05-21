import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"
import DrawnArrow from "../../assets/drawnArrow.svg"
import { Link } from "gatsby"

export default () => {
  return (
    <div className="work-container icenter col">
      <h2>Blog</h2>
      <div className="row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Link
        to="/blog"
        // activeClassName="active"
        className="see-all"
      >
        <div>See the full blog</div>
        <div style={{ transform: "rotate(90deg)", marginLeft: "4px" }}>
          <DrawnArrow height="24px" width="24px" fill="#527693" />
        </div>
      </Link>
    </div>
  )
}
