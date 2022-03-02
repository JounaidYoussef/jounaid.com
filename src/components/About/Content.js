import React from "react"
import SocialBar from "../Bars/SocialBar"
import "./index.scss"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  return (
    <div>
      <div className="bio">
        <div className="about-container">
          <div className="minicontainer">
            <p>
              I'm a Mobile/FrontEnd engineer. Currently working with helping my
              team produce good quality Apps.
              <br />
              Solving problems and creating new visual languages is my biggest
              passion. My software engineering background makes me think of
              solutions in a structural and algorithmic way. Everything will
              need to make perfect sense and will need to be built around the
              user.
              <br />
              I'm interested in all kinds of visual communication, I enjoy using
              my obsessive attention to detail to do that.
            </p>
            <p>I am always experimenting, always learning, and never bored.</p>
          </div>
          <div className="minicontainer">
            <div className="personal-asset">
              <StaticImage
                src="../../assets/photo.png"
                alt="Personal Picture"
                placeholder="blurred"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SocialBar fill="#4C596A" />
      </div>
    </div>
  )
}
