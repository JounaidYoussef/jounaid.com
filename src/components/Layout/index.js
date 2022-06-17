import Footer from "../Footer"
import Header from "../Header"
import React, { useState } from "react"
import "./index.scss"
import ScrollUp from "../../assets/ScrollUp"

const isBrowser = typeof window !== "undefined"

export default ({ iscontact, children, isFooterDisabled = false }) => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (isBrowser) {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }
  }

  if (isBrowser) {
    window.addEventListener("scroll", checkScrollTop)
  }

  const scrollTop = () => {
    if (isBrowser) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  return (
    <div className="container">
      <div className="styles">
        <Header iscontact={iscontact} />
        {children}
      </div>
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{
          height: 40,
          display: showScroll ? "flex" : "none",
        }}
      >
        <ScrollUp />
      </button>
      {isFooterDisabled ? null : <Footer />}
    </div>
  )
}
