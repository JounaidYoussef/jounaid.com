import ArtBar from "../Bars/ArtBar"
import SocialBar from "../Bars/SocialBar"
import ContactInfo from "./ContactInfo"
import "./index.scss"
import React from "react"
import Profile from "../../assets/Profile"
import BareMail from "../../assets/BareMail"

// import Download from "../../assets/download.svg"

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-content">
        <div className="contact-form-header ta">
          <h2 style={{ marginBottom: "0.2em" }}> Let’s Talk</h2>
          <p className="description">
            To send me a message or want to meet up for a coffee, contact me
            directly or fill out the form and I will get back to you promptly.
          </p>
        </div>
        <div className="jcenter" style={{ marginTop: "0.4em" }}>
          <ContactInfo />
        </div>
        <div className="form-container">
          {/* <div className="contact-image">
            <StaticImage
              src="../../assets/1.jpg"
              alt="Personal Picture"
              width={400}
              height={200}
            />
          </div> */}
          <form
            name="contact"
            method="post"
            data-netlify="true"
            className="contact-form"
            data-netlify-honeypot="bot-field"
            action="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact-item row icenter">
              <Profile />
              <input placeholder="Name" type="text" name="name" required />
            </div>
            <div className="contact-item row icenter">
              <BareMail />
              <input placeholder="Email" type="email" name="email" required />
            </div>
            <div className="contact-item-long">
              <textarea
                placeholder="Message"
                rows={7}
                name="message"
                required
              ></textarea>
            </div>
            {/* <a href="#" className="contact-item row icenter">
              <Download />
              <text
                style={{ padding: "8px", fontWeight: "400", fontSize: "12px" }}
              >
                Insert File
              </text>
            </a> */}
            <div className="actions">
              {/* type="submit" */}
              <button type="submit" className="send">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="jcenter" style={{ marginTop: "2em" }}>
        <SocialBar fill="#4C596A" />
      </div>
    </div>
  )
}

export default ContactForm
