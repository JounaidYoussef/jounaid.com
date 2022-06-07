import "./index.scss"
import React from "react"
import BlogPostCard from "../Cards/BlogPostCard"
import DrawnArrow from "../../assets/DrawnArrow"
import { Link } from "gatsby"

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
      <Link
        to="/blog"
        // activeClassName="active"
        className="see-all"
      >
        <div>See the full blog</div>
        <div style={{ transform: "rotate(90deg)", marginLeft: "4px" }}>
          <DrawnArrow height="24px" width="24px" fill="#527693" />
        </div>
      </Link>
    </div>
  )
}

export default Articles
