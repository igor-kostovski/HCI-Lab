import React from "react"

import SeparatorBar from "../components/separatorBar"
import Card from "../components/card"

import { contactSections, cardType as cardTypes, faq, findUs, contactForm } from "../constants"

import styles from "./contact.module.css"

const ContactPage = () => (
  <>
    <SeparatorBar text={contactSections.faq} />
    <div className={styles.faqContainer}>
      <div className={styles.question1}>
        <Card cardType={cardTypes.crew}
              header={faq.questions.question1}
              text={faq.answers.answer1}/>
      </div>
      <div className={styles.question2}>
        <Card cardType={cardTypes.crew}
              header={faq.questions.question2}
              text={faq.answers.answer2}/>      
      </div>
      <div className={styles.question3}>
        <Card cardType={cardTypes.crew}
              header={faq.questions.question3}
              text={faq.answers.answer3}/>      
      </div>
      <div className={styles.question4}>
        <Card cardType={cardTypes.crew}
              header={faq.questions.question4}
              text={faq.answers.answer4}/>
      </div>
      <div className={styles.question5}>
        <Card cardType={cardTypes.crew}
              header={faq.questions.question5}
              text={faq.answers.answer5}/>
      </div>
      <div className={styles.question6}>
        <Card cardType={cardTypes.crew}
              header={faq.questions.question6}
              text={faq.answers.answer6}/>
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