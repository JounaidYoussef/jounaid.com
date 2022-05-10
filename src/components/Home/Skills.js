import D from "../../assets/d.svg"
import M from "../../assets/m.svg"
import U from "../../assets/u.svg"
import "./index.scss"
import React from "react"

export default () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h2>What I Do</h2>
      </div>
      <div className="intro-container">
        <div className="skill-container">
          <div className="image-container">
            <D width="140px" height="140px" />
          </div>
          <div>
            <p id="skills-section-title">FullStack Web Development</p>
            <p id="skills-section-text">
              Turning up your ideas into usable MVPs, Developing websites using
              MERN, MEAN or JAM stack
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <M width="140px" height="140px" />
          </div>
          <div>
            <p id="skills-section-title">Mobile Development</p>
            <p id="skills-section-text">
              Mainly with React Native, I work on creating CrossPlatform
              (Android and iOS) Mobile Apps from scratch
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <U width="140px" height="140px" />
          </div>
          <div>
            <p id="skills-section-title">UI/UX Design</p>
            <p id="skills-section-text">
              Designing and optimizing user interfaces focusing on design,
              usability, function, and even branding and marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
