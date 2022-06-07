import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { format } from "date-fns"
import CopyLink from "../../assets/CopyLink"
import Checkmark from "../../assets/Checkmark"

const BlogPostCard = ({ viewMode, post }) => {
  const date = format(new Date(post.frontmatter.date), "MMMM do yyyy")

  const copylink = () => {
    event.preventDefault()
    console.log("hello")
  }

  return !viewMode ? (
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
            <div className="copylink">
              <button onClick={() => copylink()} className="copyl">
                <CopyLink width="10px" height="10px" />
                <Checkmark width="12px" height="12px" />
              </button>
            </div>
          </div>

          <div className="col mx-2">
            <text
              style={{
                fontSize: "14px",
                fontWeight: 400,
                margin: "1em 0 0.6em 0",
                color: "#527693",
              }}
            >
              {date} — {post.frontmatter.min} min read
            </text>
            <text
              style={{ fontSize: "24px", fontWeight: 600, color: "#4C596A" }}
            >
              {post.frontmatter.title}
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
  ) : (
    <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
      <div className="list-blogpost-container">
        <GatsbyImage
          image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
          alt="hello"
          className="list-blogpost-image-container"
        />
        <div className="list-blogpost-info-container">
          <text style={{ fontSize: "28px", fontWeight: 600, color: "#4C596A" }}>
            {post.frontmatter.title}
          </text>

          <text
            style={{
              fontSize: "14px",
              fontWeight: 400,
              margin: "0.6em 0 0.6em 0",
              color: "#64758b",
            }}
          >
            {post.excerpt}
          </text>
          <text
            style={{
              fontSize: "14px",
              fontWeight: 400,
              margin: "0.6em 0 0.6em 0",
              color: "#527693",
            }}
          >
            {date} — {post.frontmatter.min} min read
          </text>
          <span />
        </div>
      </div>
    </Link>
  )
}

export default BlogPostCard
