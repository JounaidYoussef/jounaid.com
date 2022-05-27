import "./index.scss"
import React from "react"
import BlogPostCard from "../Cards/BlogPostCard"
import ProjectCard from "../Cards/ProjectCard"

const ProjectsList = ({ data, category }) => {
  return (
    <div>
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
