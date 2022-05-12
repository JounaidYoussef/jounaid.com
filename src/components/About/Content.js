import ArtBar from "../Bars/ArtBar"
import SocialBar from "../Bars/SocialBar"
import "./index.scss"
import React from "react"
import Avatar from "../../assets/avatar.svg"

export default () => {
  return (
    <div>
      <div className="bio">
        <div className="about-container col">
          <div className="minicontainer">
            <div className="personal-asset">
              <Avatar />
            </div>
          </div>
          <div className="minicontainer ta">
            <p>
              Youssef Jounaid <br />
              I'm a FullStack Web & Mobile engineer. Solving problems and
              creating new visual languages is my biggest passion.
              <br />
              <br /> In building JavaScript applications, I'm equipped with just
              the right tools, and can absolutely function independently of them
              to deliver fast, resilient,optimized and scalable solutions.
              <br />
              <br /> My tireless dedication to details keeps me trying and
              experimenting, always learning, and never bored.
              <br />
              <br /> Besides computer science, I am interested in all aspects of
              Art, Entrepreneurship, Management and new technologies.
              <br />I love photography, cinematography and videography. And if
              it wasn’t for IT, I would have been a director, who turns stories
              into movies.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div>
        <SocialBar fill="#4C596A" />
        <ArtBar fill="#4C596A" />
      </div>
    </div>
  )
}
