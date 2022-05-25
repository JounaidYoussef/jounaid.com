import Layout from "../components/Layout"
import * as React from "react"
import ProjectCard from "../components/Cards/ProjectCard"
import { useState } from "react"
import ProjectsList from "./../components/Projects/ProjectsList"
// markup
const Projects = () => {
  const [projectsToggleState, setProjectsToggleState] = useState(
    JSON.parse(localStorage.getItem("projects-display-section")) == null
      ? 1
      : JSON.parse(localStorage.getItem("projects-display-section"))
  )

  React.useEffect(() => {
    localStorage.setItem("projects-display-section", projectsToggleState)
  }, [projectsToggleState])

  const toggleTab = (index) => {
    setProjectsToggleState(index)
  }
  return (
    <Layout iscontact={false}>
      <title>Projects | Youssef Jounaid</title>
      <main>
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
              <ProjectsList />
            </div>
            <div
              className={
                projectsToggleState === 2
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList />
            </div>

            <div
              className={
                projectsToggleState === 3
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList />
            </div>
            <div
              className={
                projectsToggleState === 4
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Projects
