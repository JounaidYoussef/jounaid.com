import Layout from "../components/Layout"
import * as React from "react"
import { graphql } from "gatsby"
import BlogPostList from "./../components/Blog/BlogPostList"
import Grid from "../assets/Grid"
import List from "../assets/List"

const isBrowser = typeof window !== "undefined"

// markup
const Blog = ({ data }) => {
  const { posts } = data.blog

  console.log(posts)
  const [toggleViewMode, setToggleViewMode] = React.useState(
    isBrowser
      ? JSON.parse(localStorage.getItem("display-mode")) == null
        ? true
        : JSON.parse(localStorage.getItem("display-mode"))
      : null
  )

  React.useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("display-mode", toggleViewMode)
    }
  }, [toggleViewMode])

  const [blogToggleState, setBlogToggleState] = React.useState(
    isBrowser
      ? JSON.parse(localStorage.getItem("blog-display-section")) == null
        ? 1
        : JSON.parse(localStorage.getItem("blog-display-section"))
      : null
  )

  React.useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("blog-display-section", blogToggleState)
    }
  }, [blogToggleState])

  const toggleTab = (index) => {
    setBlogToggleState(index)
  }
  return (
    <Layout iscontact={false}>
      <title>Blog | Youssef Jounaid</title>
      <main>
        <h2>Blog</h2>
        <h4>Find the latest of my writing here</h4>
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
              <input
                type="radio"
                id="radio-1"
                name="tabs"
                checked={blogToggleState === 1}
              />
              <label
                onClick={() => toggleTab(1)}
                className="tab"
                htmlFor="radio-1"
              >
                All
                {/* <span className="notification">2</span> */}
              </label>
              <input
                type="radio"
                id="radio-2"
                name="tabs"
                checked={blogToggleState === 2}
              />
              <label
                onClick={() => toggleTab(2)}
                className="tab"
                htmlFor="radio-2"
              >
                Dev
              </label>
              <input
                type="radio"
                id="radio-3"
                name="tabs"
                checked={blogToggleState === 3}
              />
              <label
                onClick={() => toggleTab(3)}
                className="tab"
                htmlFor="radio-3"
              >
                Design
              </label>
              <input
                type="radio"
                id="radio-4"
                name="tabs"
                checked={blogToggleState === 4}
              />
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
          <div className="toggle-layout-section">
            <button
              id="toggle-button"
              style={{
                backgroundColor: toggleViewMode ? "#E6EEF9" : "transparent",
              }}
              onClick={() => setToggleViewMode(true)}
            >
              <Grid />
            </button>
            <button
              id="toggle-button"
              style={{
                backgroundColor: !toggleViewMode ? "#E6EEF9" : "transparent",
              }}
              onClick={() => setToggleViewMode(false)}
            >
              <List />
            </button>
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={
              blogToggleState === 1
                ? "projects-content  active-content"
                : "projects-content"
            }
          >
            <BlogPostList category="all" data={posts} mode={!toggleViewMode} />
          </div>

          <div
            className={
              blogToggleState === 2
                ? "projects-content  active-content"
                : "projects-content"
            }
          >
            <BlogPostList category="dev" data={posts} mode={!toggleViewMode} />
          </div>
          <div
            className={
              blogToggleState === 3
                ? "projects-content  active-content"
                : "projects-content"
            }
          >
            <BlogPostList
              category="design"
              data={posts}
              mode={!toggleViewMode}
            />
          </div>
          <div
            className={
              blogToggleState === 4
                ? "projects-content  active-content"
                : "projects-content"
            }
          >
            <BlogPostList
              category="tools"
              data={posts}
              mode={!toggleViewMode}
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date
          title
          author
          categories
          banner {
            childImageSharp {
              gatsbyImageData(width: 1000, formats: [AUTO, WEBP, AVIF])
            }
          }
          min
          published
          categories
          posttype
        }
        excerpt
        id
      }
    }
  }
`

// (fromNow: true)
