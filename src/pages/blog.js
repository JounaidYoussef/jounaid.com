import BlogPostCard from "../components/Cards/BlogPostCard"
import Layout from "../components/Layout"
import * as React from "react"
import { graphql, Link } from "gatsby"

// markup
const Blog = ({ data }) => {
  const { posts } = data.blog

  return (
    <Layout>
      <main>
        <title>Blog Page</title>
        <div>
          <h1>My blog posts</h1>
          {posts.map((post) => (
            <article key={post.id}>
              <Link to={post.fields.slug}>
                <div>
                  <h2>{post.frontmatter.title}</h2>
                  <small>
                    {post.frontmatter.author}, {post.frontmatter.date}
                  </small>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
