import React from "react"
import "./index.scss"
import Mail from "../../assets/mail.svg"
import Location from "../../assets/location.svg"

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
