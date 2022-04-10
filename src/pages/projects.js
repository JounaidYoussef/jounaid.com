import Layout from "../components/Layout"
import * as React from "react"
import ProjectCard from "../components/Cards/ProjectCard"
import { useState } from "react"

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
              <h2>Content 1</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>

            <div
              className={
                toggleState === 2
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <h2>Content 2</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={
                toggleState === 3
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <h2>Content 3</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
            <div
              className={
                toggleState === 4
                  ? "projects-content  active-content"
                  : "projects-content"
              }
            >
              <h2>Content 4</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Projects
