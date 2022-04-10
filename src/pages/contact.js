import ContactForm from "../components/Contact/ContactForm"
import Layout from "../components/Layout"
import * as React from "react"
// markup
const Contact = ({ location }) => {
  return (
    <Layout iscontact={true} isFooterDisabled={true}>
      <title>Contact | Youssef Jounaid</title>
      <main>
        <div>
          <p>The location is {location.pathname}</p>
          <ContactForm />
        </div>
      </main>
    </Layout>
  )
}

export default Contact
