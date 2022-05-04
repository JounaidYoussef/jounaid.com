import Footer from "../Footer"
import Header from "../Header"
import React, { useState } from "react"
import "./index.scss"

const styles = {
  color: "#232129",
  padding: "20px 160px 40px 160px",
}

const container = {
  padding: "0 0 0 0",
  minwidth: "320px",
}

export default ({ iscontact, children, isFooterDisabled = false }) => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false)
    }
  }
  window.addEventListener("scroll", checkScrollTop)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div style={container}>
      <div style={styles}>
        <Header iscontact={iscontact} />
        {children}
      </div>
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      >
        Top
      </button>
      {isFooterDisabled ? null : <Footer />}
    </div>
  )
}
