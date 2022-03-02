import React from "react"
import Image from "gatsby"
import SocialBar from "../Bars/SocialBar"
import "./index.scss"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  return (
    <div>
      <div className="content ">
        <h1> Let’s Get In Touch</h1>
        <p>
          To send me a message or want to meet up for a coffee, contact me
          directly or fill out the form and I will get back to you promptly.
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
          data-netlify-honeypot="bot-field"
          action="/thanks"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div className="contact-item">
            <label>Your Name</label>
            <input placeholder="Name" type="text" name="name" required />
          </div>
          <div className="contact-item">
            <label>Your Email</label>
            <input placeholder="Email" type="email" name="email" required />
          </div>
          <div className="contact-item">
            <label>Your Message</label>
            <textarea
              placeholder="Your Message"
              rows="5"
              name="message"
              required
            ></textarea>
          </div>
          <div className="actions">
            <button type="submit" className="button">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="social">
        <SocialBar fill="#4C596A" />
      </div>
    </div>
  )
}
