import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"
import { transform } from "typescript"
import { Link } from "gatsby"
import DrawnArrow from "../../assets/DrawnArrow"

const Articles = ({ data }) => {
  return (
    <div className=" icenter col">
      <h2>Featured Work</h2>
      <div className="gridarticles">
        {data.map((post) =>
          post.frontmatter.posttype === "project" && post.frontmatter.lead ? (
            <article key={post.id}>
              <ProjectCard post={post} />
            </article>
          ) : null
        )}
      </div>
    </div>
  )
}

export default Articles
