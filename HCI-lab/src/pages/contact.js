import React from "react"

import SeparatorBar from "../components/separatorBar"
import { contactSections } from "../constants"

const ContactPage = () => (
  <>
    <SeparatorBar text={contactSections.faq} />
    <SeparatorBar text={contactSections.findUs} />
    <SeparatorBar text={contactSections.contact} />
  </>
)

export default ContactPage