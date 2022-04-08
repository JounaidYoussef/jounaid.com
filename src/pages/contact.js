import ContactForm from "../components/Contact/ContactForm"
import Layout from "../components/Layout"
import * as React from "react"

// markup
const Contact = () => {
  return (
    <Layout isFooterDisabled={true}>
      <title>Contact | Youssef Jounaid</title>
      <main>
        <div>
          <ContactForm />
        </div>
      </main>
    </Layout>
  )
}

export default Contact
