import "./index.scss"
import React from "react"
import BlogPostCard from "../Cards/BlogPostCard"

const BlogPostList = ({ data, mode }) => {
  return (
    <div className={mode === true ? "bloglist-grid" : "bloglist-list"}>
      {data.map((post) => (
        <article key={post.id}>
          <BlogPostCard viewMode={mode} post={post} />
        </article>
      ))}
    </div>
  )
}

export default BlogPostList
