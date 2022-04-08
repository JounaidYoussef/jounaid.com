import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <GatsbyImage
          image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
          alt="hello"
        />
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
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
        banner {
          childImageSharp {
            gatsbyImageData(width: 1000, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
