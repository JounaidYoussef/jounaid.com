import React from "react"
import Image, { Link } from "gatsby"
import SocialBar from "../Bars/SocialBar"
import "./index.scss"

import { StaticImage } from "gatsby-plugin-image"
import ContactInfo from "./ContactInfo"

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="content ">
        <div className="contact-form-header">
          <h2> Let’s Get In Touch</h2>
          <p className="description">
            To send me a message or want to meet up for a coffee, contact me
            directly or fill out the form and I will get back to you promptly.
          </p>
        </div>
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
            {/* type="submit" */}
            <Link className="send">Send</Link>
          </div>
        </form>
      </div>
      <div className="social">
        <SocialBar fill="#4C596A" />
        <ContactInfo />
      </div>
    </div>
  )
}

export default ContactForm
