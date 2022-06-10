import React from "react"
import "./index.scss"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { format } from "date-fns"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const date = format(new Date(post.frontmatter.date), "MMMM do yyyy")

  return (
    <Layout iscontact={false}>
      {post.frontmatter.posttype == "post" ? (
        <div className="post-container">
          {/* <p>{post.frontmatter.posttype}</p> */}
          <text style={{ fontSize: "32px", fontWeight: 600, color: "#4C596A" }}>
            {post.frontmatter.title}
          </text>{" "}
          <text
            style={{
              fontSize: "14px",
              fontWeight: 400,
              margin: "0.4em 0 0.6em 0",
              color: "#527693",
            }}
          >
            {date} — {post.frontmatter.min} min read
          </text>
          {/* <small>{post.frontmatter.author}</small> */}
          <GatsbyImage
            image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
            alt="hello"
          />{" "}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      ) : (
        <div>
          <div className="post-container">
            {/* <p>{post.frontmatter.posttype}</p> */}
            <text
              style={{ fontSize: "32px", fontWeight: 600, color: "#4C596A" }}
            >
              {post.frontmatter.title}
            </text>{" "}
            {/* <GatsbyImage
                image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
                alt="hello"
              />{" "} */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>{" "}
        </div>
      )}
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
        min
        banner {
          childImageSharp {
            gatsbyImageData(width: 300, formats: [AUTO, WEBP, AVIF])
          }
        }
        published
        categories
        posttype
      }
    }
  }
`
