import Location from "../../assets/location.svg"
import Mail from "../../assets/mail.svg"
import "./index.scss"
import React from "react"

const ContactInfo = () => {
  return (
    <div className="infos-global-container">
      <div className="info-mini-container">
        <a id="info-item" href="https://www.linkedin.com/in/jounaidyoussef/">
          <Mail fill="#4C596A" />
          <p id="info-text">Jounaid.ysf@gmail.com</p>
        </a>
      </div>
      <div className="info-mini-container">
        <a id="info-item" href="https://www.linkedin.com/in/jounaidyoussef/">
          <Location fill="#4C596A" />
          <p id="info-text">Paris</p>
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
