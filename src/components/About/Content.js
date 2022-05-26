import ArtBar from "../Bars/ArtBar"
import SocialBar from "../Bars/SocialBar"
import "./index.scss"
import React from "react"
import Hobbies from "../../assets/hobbies.svg"
import Uiux from "../../assets/uiux.svg"
import Avatar from "../../assets/avatar.svg"
import { Link } from "gatsby"

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
          <div className="row icenter">
            <div className="minicontainer icenter jcenter">
              <p style={{ maxWidth: "40em", textJustify: "auto" }}>
                I’m <b>Youssef Jounaid</b>. I’m a software Engineer, Frontend
                developer and Designer. I care deeply about creating robust,
                useful, and beautiful products that help.
                <br /> My interest in web development started back in 2012 when
                I discovered Chrome Inspector and I changed headers and text to
                prank friends. turns out I learned a lot about HTML & CSS
                without knowing it.
                {/* people and make a difference. From the seed of the idea, to
                sketches, design, system design, and even the front-end and WordPress build. */}
                {/* <br />
              <br /> My tireless dedication to details keeps me trying and
              experimenting, always learning, and never bored.
              <br />
              <br /> Besides computer science, I am interested in all aspects of
              Art, Entrepreneurship, Management and new technologies.
              <br />I love photography, cinematography and videography. And if
              it wasn’t for IT, I would have been a director, who turns stories
              into movies.
              <br /> */}
              </p>
            </div>
            <div
              style={{ marginLeft: "0.8em" }}
              className="minicontainer icenter jcenter"
            >
              <Avatar />
            </div>
          </div>
          <div className="row icenter">
            <div
              style={{ marginRight: "0.8em" }}
              className="minicontainer icenter jcenter"
            >
              <Uiux />
            </div>
            <div className="minicontainer icenter jcenter">
              <p style={{ maxWidth: "40em", textJustify: "auto" }}>
                Im constantly writing blogs about my learning journey. Whether
                it's software or design related. Also, Im looking forward to
                share my own experience on tools, paradigms and techniques.
                <br />
                My main focus these days is building accessible, inclusive
                products and digital experiences for teams at{" "}
                <a target="_blank" href="https://www.orange.fr/">
                  Orange France{" "}
                </a>
                .
                {/* <br />
              <br /> My tireless dedication to details keeps me trying and
              experimenting, always learning, and never bored.
              <br />
              <br /> Besides computer science, I am interested in all aspects of
              Art, Entrepreneurship, Management and new technologies.
              <br />I love photography, cinematography and videography. And if
              it wasn’t for IT, I would have been a director, who turns stories
              into movies.
              <br /> */}
              </p>
            </div>
          </div>
          <div className="row icenter">
            <div className="minicontainer icenter jcenter">
              <p
                style={{
                  maxWidth: "40em",
                  textJustify: "auto",
                }}
              >
                Outside of work,I find inspiration through Filmmaking,
                Photography, and traveling with friends.
                <br />
                If it wasn’t for IT, I would have been a movie director, I'm
                always interested in storytelling and whatever form that comes
                in.
                {/* <br />
              <br /> My tireless dedication to details keeps me trying and
              experimenting, always learning, and never bored.
              <br />
              <br /> Besides computer science, I am interested in all aspects of
              Art, Entrepreneurship, Management and new technologies.
              <br />I love photography, cinematography and videography. And if
              it wasn’t for IT, I would have been a director, who turns stories
              into movies.
              <br /> */}
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
        <div className="row jcenter">
          <SocialBar fill="#d19821" />
          <ArtBar fill="#d19821" />
        </div>
      </div>
    </div>
  )
}
