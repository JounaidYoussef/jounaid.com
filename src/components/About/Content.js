import ArtBar from "../Bars/ArtBar"
import SocialBar from "../Bars/SocialBar"
import "./index.scss"
import React from "react"

import { Link } from "gatsby"
import Avatar from "../../assets/Avatar"
import UiUx from "../../assets/UiUx"
import Hobbies from "../../assets/Hobbies"

export default () => {
  return (
    <div>
      <div className="bio">
        <div className="about-container col">
          {/* <div className="minicontainer">
            <div className="personal-asset">
              <Avatar />
            </div>
          </div> */}
          <div className="ta">
            <h1>Hello</h1>
          </div>
          <div className="microcontainer icenter first">
            <div className="minicontainer icenter jcenter">
              <p style={{ maxWidth: "40em", textJustify: "auto" }}>
                I’m{" "}
                <b
                  style={{
                    color: "#4C596A",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Youssef Jounaid
                </b>
                . I’m a software Engineer, Frontend developer and Designer. I
                care deeply about creating robust, useful, and beautiful
                products that help.
                <br /> My interest in web development started back in 2012 when
                I discovered Chrome Inspector and I changed headers and text to
                prank friends. turns out I learned a lot about HTML & CSS
                without knowing it.
              </p>
            </div>
            <div
              style={{ marginLeft: "0.8em" }}
              className="minicontainer icenter jcenter"
            >
              <Avatar />
            </div>
          </div>
          <div className="microcontainer icenter second">
            <div
              style={{ marginRight: "0.8em" }}
              className="minicontainer icenter jcenter"
            >
              <UiUx />
            </div>
            <div className="minicontainer icenter jcenter">
              <p style={{ maxWidth: "40em", textJustify: "auto" }}>
                Im constantly writing blogs about my learning journey. Whether
                it's software or design related. Also, Im looking forward to
                share my own experience on tools, paradigms and techniques.
                <br />
                My main focus these days is building accessible, inclusive
                products and digital experiences for teams at{" "}
                <a
                  style={{
                    color: "#4C596A",
                    fontSize: "12px",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  href="https://www.orange.fr/"
                >
                  Orange France
                </a>
                .
              </p>
            </div>
          </div>
          <div className="microcontainer icenter third">
            <div className="minicontainer icenter jcenter">
              <p
                style={{
                  maxWidth: "40em",
                  textJustify: "auto",
                }}
              >
                Outside of work, I find inspiration through Filmmaking,
                Photography, and traveling with friends.
                <br />
                If it wasn’t for IT, I would have been a movie director, I'm
                always interested in storytelling and whatever form that comes
                in.
              </p>
            </div>
            <div
              className="minicontainer icenter jcenter"
              style={{ marginLeft: "1.8em" }}
            >
              <Hobbies />
            </div>
          </div>
        </div>
      </div>
      <div className="col jcenter icenter" style={{ margin: "3em 0 2em 0" }}>
        <div className="about-contact">
          <Link className="about-getintouch" to="/contact">
            Get In Touch
          </Link>
        </div>
        <div className="about-bar jcenter">
          <SocialBar fill="#527693" />
          <ArtBar fill="#527693" />
        </div>
      </div>
    </div>
  )
}
