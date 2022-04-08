import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPostCard = ({ start, viewMode, post }) => {
  console.log(start)
  return viewMode ? (
    <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
      <div className="grid-blogpost-container">
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
      </div>
    </Link>
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
