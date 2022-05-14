import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Project({ data }) {
  const post = data.markdownRemark

  return (
    <Layout iscontact={false}>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.author}</small>
        <small>{post.frontmatter.date}</small>
        <GatsbyImage
          image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
          alt="hello"
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
        banner {
          childImageSharp {
            gatsbyImageData(width: 500, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
