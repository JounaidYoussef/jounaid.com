import Footer from "../Footer"
import Header from "../Header"
import React from "react"

const styles = {
  color: "#232129",
  padding: "40px 160px 40px 160px",
}

const container = {
  padding: "0 0 0 0",
  minwidth: "320px",
}

export default ({ iscontact, children, isFooterDisabled = false }) => {
  return (
    <div style={container}>
      <div style={styles}>
        <Header iscontact={iscontact} />
        {children}
      </div>
      {isFooterDisabled ? null : <Footer />}
    </div>
  )
}
