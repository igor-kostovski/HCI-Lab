import React from "react"

import SeparatorBar from "../components/separatorBar"
import Card from "../components/card"

import { contactSections, faq, findUs, contactForm, images } from "../constants"

import styles from "./contact.module.css"

const ContactPage = () => (
  <>
    <SeparatorBar text={contactSections.faq} />
    <div className={styles.faqContainer}>
      <div className={styles.question1}>
        <Card image={images.safety} header={faq.questions.question1}>
          {faq.answers.answer1}
        </Card>
      </div>
      <div className={styles.question2}>
        <Card image={images.sailing} header={faq.questions.question2}>
          {faq.answers.answer2}
        </Card>
      </div>
      <div className={styles.question3}>
        <Card image={images.food} header={faq.questions.question3}>
          {faq.answers.answer3}
        </Card>
      </div>
      <div className={styles.question4}>
        <Card image={images.travel} header={faq.questions.question4}>
          {faq.answers.answer4}
        </Card>
      </div>
      <div className={styles.question5}>
        <Card image={images.payment} header={faq.questions.question5}>
          {faq.answers.answer5}
        </Card>
      </div>
      <div className={styles.question6}>
        <Card image={images.cancel} header={faq.questions.question6}>
          {faq.answers.answer6}
        </Card>
      </div>
    </div>
    <SeparatorBar text={contactSections.findUs} />
    <div className={styles.findUsContainer}>
      <div className={styles.telephoneLabel}>{findUs.labels.telephone}</div>
      <div className={styles.telephoneValue}>{findUs.values.telephone}</div>
      <div className={styles.emailLabel}>{findUs.labels.email}</div>
      <div className={styles.emailValue}>{findUs.values.email}</div>
      <div className={styles.addressLabel}>{findUs.labels.address}</div>
      <div className={styles.addressValue}>{findUs.values.address}</div>
    </div>
    <SeparatorBar text={contactSections.contact} />
    <div className={styles.contactFormContainer}>
      <div className={styles.contactFormNameLabel}>{contactForm.labels.name}</div>
      <input className={styles.contactFormNameValue}></input>
      <div className={styles.contactFormEmailLabel}>{contactForm.labels.email}</div>
      <input className={styles.contactFormEmailValue}></input>
      <div className={styles.contactFormMessageLabel}>{contactForm.labels.message}</div>
      <textarea className={styles.contactFormMessageValue}></textarea>
      <div className={styles.submitButton}>{contactForm.buttonText}</div>
    </div>
  </>
)

export default ContactPage