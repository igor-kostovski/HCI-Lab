import React from "react"

import SeparatorBar from "../components/separatorBar"
import { contactSections } from "../constants"

import styles from "./contact.module.css"

const ContactPage = () => (
  <>
    <SeparatorBar text={contactSections.faq} />
    <div className={styles.faqContainer}>
    </div>
    <SeparatorBar text={contactSections.findUs} />
    <div className={styles.findUsContainer}>
      <div className={styles.telephoneLabel}>Telephone: </div>
      <div className={styles.telephoneValue}>+385 98 448 518</div>
      <div className={styles.emailLabel}>E-mail: </div>
      <div className={styles.emailValue}>info@delphinus-yachts.com</div>
      <div className={styles.addressLabel}>Address: </div>
      <div className={styles.addressValue}>Put Radoševca 9 21000 Split, Croatia</div>
    </div>
    <SeparatorBar text={contactSections.contact} />
    <div className={styles.contactFormContainer}>
      <div className={styles.contactFormNameLabel}>Name: </div>
      <input className={styles.contactFormNameValue}></input>
      <div className={styles.contactFormEmailLabel}>E-mail: </div>
      <input className={styles.contactFormEmailValue}></input>
      <div className={styles.contactFormMessageLabel}>Message:</div>
      <textarea className={styles.contactFormMessageValue}></textarea>
      <div className={styles.submitButton}>SUBMIT</div>
    </div>
  </>
)

export default ContactPage