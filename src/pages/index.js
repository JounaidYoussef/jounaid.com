import * as React from "react"
import Intro from "../components/Home/Intro"
import Skills from "../components/Home/Skills"
import Layout from "../components/Layout"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Poppins",
  fontWeight: "300",
}

// data
// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
// ]

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Home Page</title>
        <Intro />
        <Skills />
      </main>
    </Layout>
  )
}

export default IndexPage
