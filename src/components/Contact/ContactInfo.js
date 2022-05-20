import "./index.scss"
import React from "react"
import Baremail from "../../assets/ui/Baremail"
import Visio from "../../assets/ui/Visio"

const ContactInfo = () => {
  return (
    <div className="infos-global-container">
      <div className="info-mini-container">
        <a id="info-item" target="_blank" href="mailto:jounaid.ysf@gmail.com">
          <Baremail className="contact-icon" height="12" width="12" />
          <p id="info-text">Jounaid.ysf@gmail.com</p>
        </a>
      </div>
      <div className="info-mini-container">
        <a
          id="info-item"
          target="_blank"
          href="https://calendly.com/jounaidyoussef/call"
        >
          <Visio className="contact-icon" />
          <p id="info-text">Book a Call</p>
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
