import React from "react"
import "./index.scss"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h3 id="skills-header">What I do</h3>
      </div>
      <div className="intro-container">
        <div className="skill-container">
          <div className="image-container">
            <StaticImage
              src="../../assets/photo.png"
              alt="Personal Picture"
              placeholder="blurred"
              width={20}
              height={20}
            />
          </div>
          <div>
            <p id="skills-section-title">FullStack Web Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              tempus purus, mattis posuere augue. Morbi ut sapien ipsum. Aliquam
              ex risus, vestibulum ac maximus ac, fermentum quis elit.
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <StaticImage
              src="../../assets/photo.png"
              alt="Personal Picture"
              placeholder="blurred"
              width={20}
              height={20}
            />
          </div>
          <div>
            <p id="skills-section-title">Mobile Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              tempus purus, mattis posuere augue. Morbi ut sapien ipsum. Aliquam
              ex risus, vestibulum ac maximus ac, fermentum quis elit.
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="image-container">
            <StaticImage
              src="../../assets/photo.png"
              alt="Personal Picture"
              placeholder="blurred"
              width={20}
              height={20}
            />
          </div>
          <div>
            <p id="skills-section-title">UI/UX Design</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              tempus purus, mattis posuere augue. Morbi ut sapien ipsum. Aliquam
              ex risus, vestibulum ac maximus ac, fermentum quis elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
