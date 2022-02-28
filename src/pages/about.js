import * as React from 'react'
import Layout from '../components/Layout'
import Content from '../components/About/Content.js'

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
