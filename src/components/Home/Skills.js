import W from "../../assets/w.svg"
import Mm from "../../assets/mm.svg"
import U from "../../assets/u.svg"
import "./index.scss"
import React from "react"

export default () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h2>What I Do</h2>
      </div>
      <div className="row-skills-container">
        <div className="skill-container">
          <div className="image-container">
            <W width="72px" height="72px" />
          </div>
          <div>
            <p id="skills-section-title">Web Development</p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <Mm width="72px" height="72px" fill="#4c596a" />{" "}
          </div>
          <div>
            <p id="skills-section-title">Mobile Development</p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <U width="72px" height="72px" />
          </div>
          <div>
            <p id="skills-section-title">UI/UX Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}
