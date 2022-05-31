import Layout from "../components/Layout"
import * as React from "react"
import { Link } from "gatsby"
import DrawnArrow from "../assets/DrawnArrow"

// markup
const Success = () => {
  return (
    <div>
      <title>Success | Youssef Jounaid</title>
      <main>
        <div className="center-div">
          <div>
            <text style={{ fontSize: "12px", fontWeight: 500 }}>
              Thank you for your message. I will look into this and get back to
              you soon.
            </text>
          </div>
          <div className="row">
            <Link to="/" className="see-all">
              <div>Return To Portfolio</div>
              <div style={{ transform: "rotate(-90deg)", marginLeft: "4px" }}>
                <DrawnArrow height="24px" width="24px" fill="#527693" />
              </div>
            </Link>
            <Link to="/" className="see-all">
              <div>Exit</div>
              <div style={{ transform: "rotate(90deg)", marginLeft: "4px" }}>
                <DrawnArrow height="24px" width="24px" fill="#527693" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Success
