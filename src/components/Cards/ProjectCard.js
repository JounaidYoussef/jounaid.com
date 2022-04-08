import "./index.scss"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ProjectCard = () => {
  return (
    <div>
      <StaticImage
        src="../../assets/Logo.png"
        alt="Personal Picture"
        placeholder="blurred"
        width={80}
        height={80}
      />
    </div>
  )
}

export default ProjectCard
