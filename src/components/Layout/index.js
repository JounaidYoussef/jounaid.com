import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const styles = {
  color: "#232129",
  padding: "40px 160px 40px 160px",
};

const container = {
  padding: "0 0 0 0",
};

export default ({ children, isFooterDisabled = false }) => {
  return (
    <div style={container}>
      <div style={styles}>
        <Header />
        {children}
      </div>
      {isFooterDisabled ? null : <Footer />}
    </div>
  );
};
