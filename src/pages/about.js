import Content from "../components/About/Content.js"
import Layout from "../components/Layout"
import * as React from "react"

const About = () => {
  return (
    <Layout iscontact={false} isFooterDisabled={true}>
      <title>About | Youssef Jounaid</title>
      <main>
        <Content />
      </main>
    </Layout>
  )
}

export default About
