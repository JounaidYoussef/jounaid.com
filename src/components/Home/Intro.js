import "./index.scss"
import { Link } from "gatsby"
import React from "react"
import MainAvatar from "../../assets/MainAvatar"

export default () => {
  return (
    <div className="intro-container">
      <div className="intro-minicontainer">
        <div className="personal-asset">
          <MainAvatar />
        </div>
      </div>
      <div className="intro-minicontainer">
        <div className="intro">
          <p className="myname">Youssef Jounaid</p>
          {/* <hr className="line" /> */}
          <p className="intro">
            Software Engineer, Designer and Art Enthusiast,
            <br />I love using functional programming & OOP paradigms in
            Typescript and Java, building applications and creating visual
            identities.{" "}
          </p>
          <p className="intro,visit">
            You can find articles on these subjects and more on my blog
          </p>
          <div className="go-to-blog">
            <Link className="first visit-blog" to="/blog">
              Visit Blog
            </Link>
            <a
              href="Jounaid_Youssef.pdf"
              target="_blank"
              className="visit-resume second"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
