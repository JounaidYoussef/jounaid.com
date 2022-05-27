import "./index.scss"
import React from "react"
import BlogPostCard from "../Cards/BlogPostCard"

const BlogPostList = ({ data, mode, category }) => {
  return (
    <div className={mode === false ? "bloglist-grid" : "bloglist-list"}>
      {data.map((post) =>
        post.frontmatter.categories.includes(category) ? (
          <article key={post.id}>
            <BlogPostCard viewMode={mode} post={post} />
          </article>
        ) : null
      )}
    </div>
  )
}

export default BlogPostList
