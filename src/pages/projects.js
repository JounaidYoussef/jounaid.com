import Layout from "../components/Layout"
import * as React from "react"
import ProjectCard from "../components/Cards/ProjectCard"

// markup
const Projects = () => {
  return (
    <Layout>
      <title>Projects | Youssef Jounaid</title>
      <main>
        <h1>My Projects</h1>
        <ProjectCard />
      </main>
    </Layout>
  )
}

export default Projects
