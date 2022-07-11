import "./index.scss"
import React, { useEffect, useState } from "react"
import ProjectCard from "../Cards/ProjectCard"
import { transform } from "typescript"
import { Link } from "gatsby"
import DrawnArrow from "../../assets/DrawnArrow"

const isBrowser = typeof window !== "undefined"

const Articles = ({ data }) => {
  const leadprojects = data.filter(
    (e) => e.frontmatter.lead === true && e.frontmatter.posttype === "project"
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
    if (isBrowser) {
      return innerWidth
    }
  }

  return (
    <div className=" icenter col">
      <h2>Featured Work</h2>
      <div className="gridarticles">
        {(getWindowWidth() < 992 ? leadprojects.slice(0, 2) : leadprojects).map(
          (post) => (
            <article key={post.id}>
              <ProjectCard post={post} />
            </article>
          )
        )}
      </div>
      <Link
        to="/projects"
        // activeClassName="active"
        className="see-all"
      >
        <div className="see-all-text">Browse All Projects</div>
        <div style={{ transform: "rotate(90deg)", marginLeft: "4px" }}>
          <DrawnArrow height="24px" width="24px" fill="#527693" />
        </div>
      </Link>
    </div>
  )
}

export default Articles
