import BlogPostCard from "../components/Cards/BlogPostCard"
import Layout from "../components/Layout"
import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Grid from "../assets/grid.svg"
import List from "../assets/list.svg"

// markup
const Blog = ({ data }) => {
  const { posts } = data.blog
  const [toggleViewMode, setToggleViewMode] = React.useState(true)
  const [toggleState, setToggleState] = React.useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <Layout iscontact={false}>
      <title>Blog | Youssef Jounaid</title>
      <main>
        <div>
          <h2>title</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="radio-container">
              <div className="tabs">
                <input type="radio" id="radio-1" name="tabs" />
                <label
                  onClick={() => toggleTab(1)}
                  className="tab"
                  htmlFor="radio-1"
                >
                  All
                  {/* <span className="notification">2</span> */}
                </label>
                <input type="radio" id="radio-2" name="tabs" />
                <label
                  onClick={() => toggleTab(2)}
                  className="tab"
                  htmlFor="radio-2"
                >
                  Dev
                </label>
                <input type="radio" id="radio-3" name="tabs" />
                <label
                  onClick={() => toggleTab(3)}
                  className="tab"
                  htmlFor="radio-3"
                >
                  Design
                </label>
                <input type="radio" id="radio-4" name="tabs" />
                <label
                  onClick={() => toggleTab(4)}
                  className="tab"
                  htmlFor="radio-4"
                >
                  Tools
                </label>
                <span className="glider"></span>
              </div>
            </div>
            <div>
              {" "}
              <button
                style={{
                  border: 0,
                  padding: "0.4em",
                  borderRadius: "5px",
                  backgroundColor: toggleViewMode ? "#e1e1e1" : "transparent",
                }}
                onClick={() => setToggleViewMode(true)}
              >
                <Grid />
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
                <List />
              </button>
            </div>
          </div>
        </div>
        <div className={toggleViewMode ? "grid-layout" : "list-layout"}>
          {posts.map((post) => (
            <article key={post.id}>
              {console.log(post.id)}
              <BlogPostCard viewMode={toggleViewMode} post={post} />
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
