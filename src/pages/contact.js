import ContactForm from "../components/Contact/ContactForm"
import Layout from "../components/Layout"
import * as React from "react"

// markup
const Contact = () => {
  return (
    <Layout isFooterDisabled={true}>
      <main>
        <title>Contact Page</title>
        <div>
          <ContactForm />
        </div>
      </main>
    </Layout>
  )
}

export default Contact
