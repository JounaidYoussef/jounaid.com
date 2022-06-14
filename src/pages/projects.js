import Layout from "../components/Layout"
import * as React from "react"
import { useState } from "react"
import ProjectsList from "./../components/Projects/ProjectsList"
import { graphql } from "gatsby"

const isBrowser = typeof window !== "undefined"

// markup
const Projects = ({ data }) => {
  const { posts } = data.blog

  console.log(posts)

  const [projectsToggleState, setProjectsToggleState] = useState(
    isBrowser
      ? JSON.parse(window.localStorage.getItem("projects-display-section")) ==
        null
        ? 1
        : JSON.parse(window.localStorage.getItem("projects-display-section"))
      : 1
  )

  React.useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem(
        "projects-display-section",
        projectsToggleState
      )
    }
  }, [projectsToggleState])

  const toggleTab = (index) => {
    setProjectsToggleState(index)
  }
  return (
    <Layout iscontact={false}>
      <title>Projects | Youssef Jounaid</title>
      <main>
        <div>
          <h2>Featured Work</h2>
          <h4>Find the latest of my projects here</h4>
        </div>
        <div>
          <div className="radio-container">
            <div className="tabs">
              <input
                type="radio"
                id="radio-1"
                name="tabs"
                checked={projectsToggleState === 1}
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
                checked={projectsToggleState === 2}
              />
              <label
                onClick={() => toggleTab(2)}
                className="tab"
                htmlFor="radio-2"
              >
                Clients
              </label>
              <input
                type="radio"
                id="radio-3"
                name="tabs"
                checked={projectsToggleState === 3}
              />
              <label
                onClick={() => toggleTab(3)}
                className="tab"
                htmlFor="radio-3"
              >
                Apps
              </label>
              <input
                type="radio"
                id="radio-4"
                name="tabs"
                checked={projectsToggleState === 4}
              />
              <label
                onClick={() => toggleTab(4)}
                className="tab"
                htmlFor="radio-4"
              >
                Clones
              </label>
              <span className="glider"></span>
            </div>
          </div>

          {/* <div className="bloc-tabs">
            <button
              className={projectsToggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              All
            </button>
            <button
              className={projectsToggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Clients
            </button>
            <button
              className={projectsToggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Apps
            </button>
            <button
              className={projectsToggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Clones
            </button>
          </div> */}
          <div className="content-tabs">
            <div
              className={
                projectsToggleState === 1
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList category="all" data={posts} />
            </div>
            <div
              className={
                projectsToggleState === 2
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList category="clients" data={posts} />
            </div>

            <div
              className={
                projectsToggleState === 3
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList category="apps" data={posts} />
            </div>
            <div
              className={
                projectsToggleState === 4
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList category="clones" data={posts} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query Query {
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
          description
          posttype
          stack {
            color
            tech
          }
        }
        excerpt(pruneLength: 100)
        id
      }
    }
  }
`
