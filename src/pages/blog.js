import BlogPostCard from "../components/Cards/BlogPostCard"
import Layout from "../components/Layout"
import * as React from "react"

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
