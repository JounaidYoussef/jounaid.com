import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPostCard = ({ post }) => {
  return (
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
