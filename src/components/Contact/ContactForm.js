import ArtBar from "../Bars/ArtBar"
import SocialBar from "../Bars/SocialBar"
import ContactInfo from "./ContactInfo"
import "./index.scss"
import Image, { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

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
        <div className="form-container">
          <div className="contact-image">
            <StaticImage
              src="../../assets/1.jpg"
              alt="Personal Picture"
              width={400}
              height={200}
            />
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
              <label id="contact-label">Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="contact-item">
              <label id="contact-label">Email Adress</label>
              <input
                placeholder="Enter your email address"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="contact-item-long">
              <label id="contact-label">Your Message</label>
              <textarea
                placeholder="Hi, I think we need a design system for our products at X. How soon can you hop on to discuss this"
                rows={7}
                name="message"
                required
              ></textarea>
            </div>
            <div className="actions">
              {/* type="submit" */}
              <a className="send">Send</a>
            </div>
          </form>
        </div>
      </div>
      <div className="social">
        <SocialBar fill="#4C596A" />
      </div>
    </div>
  )
}

export default ContactForm
