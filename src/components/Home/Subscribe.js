import "./index.scss"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"
import { transform } from "typescript"
import BareMail from "../../assets/BareMail"

export default () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-minicontainer">
        <div className="col">
          <text style={{ fontSize: 18, fontWeight: "600" }}>
            Subscribe to Jounaid.com
          </text>
          <text style={{ fontSize: 12, fontWeight: "400" }}>
            And get the latest articles delivered right to your inbox!
          </text>
        </div>

        <form
          action="https://tinyletter.com/jounaidyoussef"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://tinyletter.com/jounaidyoussef', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
          className="subscribe-section"
          style={{ width: "90%", marginTop: "0.8em" }}
        >
          <div className="subscribe-item row icenter">
            <BareMail width="20" />
            <input
              className="in"
              type="email"
              name="email"
              placeholder="Type your email"
              id="tlemail"
              required
            />
          </div>

          <input type="hidden" value="1" name="embed" />
          <button
            className="subscribe-button mx-2"
            data-element="submit"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {/* <div className="row" style={{ width: "70%", marginTop: "0.8em" }}>
          <div className="subscribe-item row icenter">
            <BareMail width="20" />
            <input
              className="in"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </div>
          <button
            onClick={() => {
              console.log("Subscribe")
            }}

          >
            Subscribe
          </button>
        </div> */}
      </div>
    </div>
  )
}
