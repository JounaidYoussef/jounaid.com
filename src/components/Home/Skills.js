import "./index.scss"
import React from "react"
import W from "../../assets/W"
import Mm from "../../assets/Mm"
import U from "../../assets/U"

export default () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h2>What I Do</h2>
      </div>
      <div className="row-skills-container">
        <div className="skill-container">
          <div className="image-container">
            <W />
          </div>
          <div>
            <p id="skills-section-title">Web Development</p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <Mm />
          </div>
          <div>
            <p id="skills-section-title">Mobile Development</p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <U />
          </div>
          <div>
            <p id="skills-section-title">UI/UX Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}
