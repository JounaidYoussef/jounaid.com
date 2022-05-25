import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Copylink from "../../assets/copylink.svg"
import Checkmark from "../../assets/checkmark.svg"

const BlogPostCard = ({ viewMode, post }) => {
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
                <Copylink width="10px" height="10px" />
                {/* <Checkmark width="12px" height="12px" /> */}
              </button>
            </div>
          </div>

          <div className="col">
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
  ) : (
    <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
      <div className="list-blogpost-container">
        <GatsbyImage
          image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
          alt="hello"
          className="list-blogpost-image-container"
        />
        <div className="list-blogpost-info-container">
          <h2>{post.frontmatter.title}</h2>
          <p>{post.excerpt}</p>
          <span />
        </div>
      </div>
    </Link>
  )
}

export default BlogPostCard
