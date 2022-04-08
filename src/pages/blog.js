import BlogPostCard from "../components/Cards/BlogPostCard"
import Layout from "../components/Layout"
import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// markup
const Blog = ({ data }) => {
  const { posts } = data.blog
  const [toggleViewMode, setToggleViewMode] = React.useState(true)
  return (
    <Layout>
      <main>
        <title>Blog Page</title>
        <div>
          <h2>title</h2>
          <div
          // style={{
          //   display: 'flex',
          //   flexDirection: 'row',
          //   alignItems: 'center',
          // }}
          >
            <button
              style={{
                border: 0,
                padding: "0.4em",
                borderRadius: "5px",
                backgroundColor: toggleViewMode ? "#e1e1e1" : "transparent",
              }}
              onClick={() => setToggleViewMode(true)}
            >
              <p>grid</p>
            </button>
            <button
              style={{
                marginLeft: "0.4em",
                border: 0,
                padding: "0.4em",
                borderRadius: "5px",
                backgroundColor: !toggleViewMode ? "#e1e1e1" : "transparent",
              }}
              onClick={() => setToggleViewMode(false)}
            >
              <p>list</p>
            </button>
          </div>
        </div>
        <div className={toggleViewMode ? "grid-layout" : "list-layout"}>
          {posts.map((post) => (
            <article key={post.id}>
              {console.log(post.id)}
              <BlogPostCard
                start={post.key == 1}
                viewMode={toggleViewMode}
                post={post}
              />
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
