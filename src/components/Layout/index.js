import React from "react"

import Header from "../Header"
import Footer from "../Footer"

const styles = {
  color: "#232129",
  padding:"40px 160px 40px 160px"}

export default ({ children }) => (
  <div style={styles}>
    <Header />
    {children}
    <Footer />
  </div>
)