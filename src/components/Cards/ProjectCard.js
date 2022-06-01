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

          <div className="col">
            <text style={{ fontSize: "10px", fontWeight: 400 }}>
              {date} — {post.frontmatter.min} min read
            </text>
            <text style={{ fontSize: "20px", fontWeight: 600 }}>
              {post.frontmatter.title}
            </text>
            <text style={{ fontSize: "12px", fontWeight: 400 }}>
              {post.excerpt}
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
