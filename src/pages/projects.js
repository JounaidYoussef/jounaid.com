import Layout from "../components/Layout"
import * as React from "react"
import ProjectCard from "../components/Cards/ProjectCard"
import { useState } from "react"

// markup
const Projects = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <Layout>
      <title>Projects | Youssef Jounaid</title>
      <main>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Tab 1
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Tab 2
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Tab 3
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Tab 4
            </button>
          </div>

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
