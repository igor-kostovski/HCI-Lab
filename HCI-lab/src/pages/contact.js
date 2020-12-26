import React from "react"

import Layout from "../layouts"
import SeparatorBar from "../components/separatorBar"
import {contactSections} from "../constants"

const ContactPage = () => (
  <>
    <Layout>
        <SeparatorBar text={contactSections.faq} />
        <SeparatorBar text={contactSections.findUs} />
        <SeparatorBar text={contactSections.contact} />
    </Layout>
  </>
)

export default ContactPage