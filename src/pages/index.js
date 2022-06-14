import Intro from "../components/Home/Intro"
import Skills from "../components/Home/Skills"
import Layout from "../components/Layout"
import * as React from "react"
import { graphql } from "gatsby"
import Testimonials from "../components/Home/Testimonials"
import Work from "../components/Home/Work"
import Articles from "../components/Home/Articles"
import Subscribe from "../components/Home/Subscribe"

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
const IndexPage = ({ data }) => {
  const { posts } = data.blog

  console.log(posts)

  // const { title, description } = data.site.siteMetadata

  return (
    <Layout iscontact={false}>
      <title>Youssef Jounaid Personal Portfolio</title>
      <main style={pageStyles}>
        <Intro />
        <Skills />
        <Articles data={posts} />
        <Work data={posts} />
        <Testimonials />
        <Subscribe />
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IQuery {
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
          posttype
          lead
          stack {
            tech
            color
          }
        }
        excerpt
        id
      }
    }
  }
`
