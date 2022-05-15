import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"
import DrawnArrow from "../../assets/drawnArrow.svg"
import { transform } from "typescript"

export default () => {
  return (
    <div className="subscribe-container">
      <div className="col">
        <text style={{ fontSize: 16, fontWeight: "600" }}>
          Subscribe to Jounaid.com
        </text>
        <text style={{ fontSize: 12, fontWeight: "400" }}>
          And get the latest articles delivered right to your inbox!
        </text>
      </div>
      <div className="my-2 row icenter">
        <input
          className="subscribe-input"
          placeholder="Name"
          type="text"
          name="name"
          required
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  )
}
