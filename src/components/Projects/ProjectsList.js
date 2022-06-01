import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"

const ProjectsList = ({ data, category }) => {
  return (
    <div className="projects-grid">
      {data.map((post) =>
        post.frontmatter.categories.includes(category) &&
        post.frontmatter.posttype === "project" ? (
          <article key={post.id}>
            <ProjectCard post={post} />
          </article>
        ) : null
      )}
    </div>
  )
}

export default ProjectsList
