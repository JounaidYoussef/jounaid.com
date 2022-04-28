import Visio from "../../assets/visio.svg"
import Mail from "../../assets/mail.svg"
import Baremail from "../../assets/baremail.svg"
import "./index.scss"
import React from "react"

const ContactInfo = () => {
  return (
    <div className="infos-global-container">
      <div className="info-mini-container">
        <a id="info-item" href="mailto:jounaid.ysf@gmail.com">
          <Baremail fill="#527693" height="12" width="12" />
          <p id="info-text">Jounaid.ysf@gmail.com</p>
        </a>
      </div>
      <div className="info-mini-container">
        <a id="info-item" href="https://calendly.com/jounaidyoussef/call">
          <Visio fill="#4C596A" />
          <p id="info-text">Book a Call</p>
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
