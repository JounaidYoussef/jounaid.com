import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { format } from "date-fns"

const ProjectCard = ({ post }) => {
  const date = format(new Date(post.frontmatter.date), "MMMM do yyyy")

  return (
    <div>
      <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
        <div
          style={{
            // width: "50%",
            margin: "0.8em",
            maxWidth: "320px",
          }}
        >
          <div className="im">
            <GatsbyImage
              image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
              imgStyle={{ borderRadius: "10px" }}
              alt="hello"
            />
          </div>
          <div className="col mx-2">
            {/* <text
              style={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {date} — {post.frontmatter.min} min read
            </text> */}
            <text
              style={{
                fontSize: "24px",
                fontWeight: 600,
                margin: "0.4em 0 0.2em 0",
                color: "#4C596A",
              }}
            >
              {post.frontmatter.title}
            </text>
            <text
              style={{ fontSize: "12px", fontWeight: 400, color: "#527693" }}
            >
              {post.frontmatter.description}
            </text>
          </div>
        </div>
        {/* <div className="grid-blogpost-container">
        <GatsbyImage
          image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
          alt="hello"
          className="grid-blogpost-image-container"
        />
        <div className="grid-blogpost-info-container">
          <h2>{post.frontmatter.title}</h2>
          <p>{post.excerpt}</p>
          <span />
        </div>
      </div> */}
      </Link>
    </div>
  )
}

export default ProjectCard
