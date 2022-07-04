import "./index.scss"
import React, { useEffect, useState } from "react"
import BlogPostCard from "../Cards/BlogPostCard"
import DrawnArrow from "../../assets/DrawnArrow"
import { Link } from "gatsby"

const Articles = ({ data }) => {
  const leadposts = data.filter(
    (e) => e.frontmatter.lead === true && e.frontmatter.posttype === "post"
  )
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  function getWindowWidth() {
    return innerWidth
  }
  return (
    <div className="col icenter">
      <h2>Blog</h2>
      <div className="gridarticles">
        {(getWindowWidth() < 800 ? leadposts.slice(0, 2) : leadposts).map(
          (post) => (
            <article key={post.id}>
              <BlogPostCard viewMode={false} post={post} />
            </article>
          )
        )}
      </div>
      <Link
        to="/blog"
        // activeClassName="active"
        className="see-all"
      >
        <div className="see-all-text">See the full blog</div>
        <div style={{ transform: "rotate(90deg)", marginLeft: "4px" }}>
          <DrawnArrow height="24px" width="24px" fill="#527693" />
        </div>
      </Link>
    </div>
  )
}

export default Articles
