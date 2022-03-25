import Content from "../components/About/Content.js"
import Layout from "../components/Layout"
import * as React from "react"

const About = () => {
  return (
    <Layout isFooterDisabled={true}>
      <main>
        <title>About Page</title>
        <Content />
      </main>
    </Layout>
  )
}

export default About
