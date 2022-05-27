import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"
import DrawnArrow from "../../assets/drawnArrow.svg"
import { graphql, Link } from "gatsby"
import BlogPostCard from "../Cards/BlogPostCard"

const Articles = ({ data }) => {
  return (
    <div>
      {data.map((post) => (
        <article key={post.id}>
          <BlogPostCard viewMode={false} post={post} />
        </article>
      ))}
    </div>
  )
}

export default Articles

// export const pageQuery = graphql`
//   query MyQuery {
//     blog: allMarkdownRemark {
//       posts: nodes {
//         fields {
//           slug
//         }
//         frontmatter {
//           date
//           title
//           author
//           categories
//           min
//           banner {
//             childImageSharp {
//               gatsbyImageData(width: 1000, formats: [AUTO, WEBP, AVIF])
//             }
//           }
//         }
//         excerpt
//         id
//       }
//     }
//   }
// `
