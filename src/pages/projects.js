import Layout from "../components/Layout"
import * as React from "react"
import ProjectCard from "../components/Cards/ProjectCard"
import { useState } from "react"
import ProjectsList from "./../components/Projects/ProjectsList"
// markup
const Projects = () => {
  const projects = [
    {
      title: "project",
      titles: "project",
      titless: "project",
      titlesss: "project",
      titlessss: "project",
      titlexx: "project",
      titlexxx: "project",
    },
    {},
    {},
  ]

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <Layout iscontact={false}>
      <title>Projects | Youssef Jounaid</title>
      <main>
        <div>
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
                Clients
              </label>
              <input type="radio" id="radio-3" name="tabs" />
              <label
                onClick={() => toggleTab(3)}
                className="tab"
                htmlFor="radio-3"
              >
                Apps
              </label>
              <input type="radio" id="radio-4" name="tabs" />
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
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              All
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Clients
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Apps
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Clones
            </button>
          </div> */}

          <div className="content-tabs">
            <div
              className={
                toggleState === 1
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList />
            </div>
            <div
              className={
                toggleState === 2
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList />
            </div>

            <div
              className={
                toggleState === 3
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <ProjectsList />
            </div>
            <div
              className={
                toggleState === 4
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
