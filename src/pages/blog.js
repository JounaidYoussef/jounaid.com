import BlogPostCard from "../components/Cards/BlogPostCard"
import Layout from "../components/Layout"
import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
              <BlogPostCard post={post} />
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
          banner {
            childImageSharp {
              gatsbyImageData(width: 1000, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        excerpt
        id
      }
    }
  }
`
