import "./index.scss"
import { Link } from "gatsby"
import React from "react"
import Mainavatar from "../../assets/mainavatar.svg"

export default () => {
  return (
    <div className="intro-container">
      <div className="minicontainer">
        <div className="personal-asset">
          <Mainavatar width="200px" />
        </div>
      </div>
      <div className="minicontainer">
        <div className="intro">
          <p className="myname">Youssef Jounaid</p>
          {/* <hr className="line" /> */}
          <p className="intro">
            Software Engineer, Designer and Art Enthusiast,
            <br />
            I love using functional programming concepts in JavaScript and
            building <br />
            applications with React & React Native.{" "}
          </p>
          <p className="intro,visit">
            You can find articles on these subjects and more on my blog
          </p>
          <div className="go-to-blog">
            <Link className="first visit-blog" to="/blog">
              Visit Blog
            </Link>
            <a
              href="src\assets\_CV.pdf"
              download="CV.pdf"
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
