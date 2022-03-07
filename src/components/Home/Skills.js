import React from "react"
import "./index.scss"
import { StaticImage } from "gatsby-plugin-image"
import UX from "../../assets/ux.svg"
import Mobile from "../../assets/mobile.svg"
import Code from "../../assets/code.svg"

export default () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h3 id="skills-header">What I do</h3>
      </div>
      <div className="intro-container">
        <div className="skill-container">
          <div className="image-container">
            <Code />
          </div>
          <div>
            <p id="skills-section-title">FullStack Web Development</p>
            <p>
              Turning up your ideas into usable MVPs, Developing websites using
              MERN, MEAN or JAM stack
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <Mobile />
          </div>
          <div>
            <p id="skills-section-title">
              Mobile <br /> Development
            </p>
            <p>
              Mainly with React Native, I work on creating CrossPlatform
              (Android and iOS) Mobile Apps from scratch
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <UX />
          </div>
          <div>
            <p id="skills-section-title">
              UI/UX
              <br /> Design
            </p>
            <p>
              Designing and optimizing user interfaces focusing on design,
              usability, function, and even branding and marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
