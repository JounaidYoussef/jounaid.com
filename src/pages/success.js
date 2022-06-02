import Layout from "../components/Layout"
import * as React from "react"
import { Link } from "gatsby"
import DrawnArrow from "../assets/DrawnArrow"
import Close from "../assets/Close"
import Sent from "../assets/Sent"
import Checkmark from "../assets/Checkmark"
import CheckmarkFull from "./../assets/CheckmarkFull"

const isBrowser = typeof window !== "undefined"

// markup
const Success = () => {
  return (
    <div>
      <title>Success | Youssef Jounaid</title>
      <main>
        <div className="success-container">
          <div className="center-div">
            <div id="sentSVG">
              <Sent />
            </div>
            <div className="col icenter">
              <div className="col icenter my-2">
                <CheckmarkFull fill="#527693" />
                <text style={{ fontSize: "14px", fontWeight: 600 }}>
                  Message Sent!
                </text>
              </div>
              <text style={{ fontSize: "12px", fontWeight: 400 }}>
                Thank you for your message. I will look into it and get back to
                you as soon as possible.
              </text>
              <Link to="/" className="close-windows">
                Close Window
              </Link>
            </div>

            {/* <div className="row success-redirect">
              <a
                onClick={() => {
                  isBrowser ? window.close() : null
                }}
              >
                <div style={{ transform: "rotate(-90deg)", marginLeft: "4px" }}>
                  <DrawnArrow height="24px" width="24px" fill="#527693" />
                </div>
                <div>To Portfolio</div>
              </a>
              <Link to="/" className="close-tab row icenter">
                <div>Close this Tab</div>
                <div style={{ transform: "rotate(90deg)", marginLeft: "4px" }}>
                  <Close height="24px" width="24px" fill="#FF506E" />
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Success
