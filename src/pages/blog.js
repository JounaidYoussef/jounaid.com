import * as React from "react"
import BlogPostCard from "../components/Cards/BlogPostCard"
import Layout from "../components/Layout"

// markup
const Blog = () => {
  return (
    <Layout>
      <main>
        <title>Blog Page</title>
        <BlogPostCard />
      </main>
    </Layout>
  )
}

export default Blog
