import "./index.scss"
import React from "react"
import BlogPostCard from "../Cards/BlogPostCard"

const Articles = ({ data }) => {
  return (
    <div className=" col icenter">
      <h2>Blog</h2>
      <div className="gridarticles">
        {data.map((post) =>
          post.frontmatter.posttype === "post" && post.frontmatter.lead ? (
            <article key={post.id}>
              <BlogPostCard viewMode={false} post={post} />
            </article>
          ) : null
        )}
      </div>
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
