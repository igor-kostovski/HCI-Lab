import React, { useState, useEffect } from "react"

import SeparatorBar from "../components/separatorBar"
import Card from "../components/card"
import Tag from "../components/searchTagBar/tag"

import { contactSections, faq, findUs, contactForm, images } from "../constants"

import styles from "./contact.module.css"
import Image from "../components/image";

const ContactPage = () => {
  const [canSubmit, setCanSubmit] = useState(true);

  const submit = () => {
    const now = new Date();
    let tommorow = new Date(now);
    tommorow.setDate(tommorow.getDate() + 1);
    localStorage.setItem('expiryDate', tommorow.toISOString());
    setCanSubmit(false);
  }

  //checks if email is never sent or expiry date has passed
  const isEmailSentInPast = () => {
    var lastSentString = localStorage.getItem('expiryDate');
    return !!!lastSentString ||
      (new Date() - new Date(Date.parse(lastSentString))) > 0;
  }

  useEffect(() => {
    setCanSubmit(isEmailSentInPast());
  }, []);

  return (
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
      <div className={styles.contactHolder}>
        <div className={styles.contactFormContainer}>
          <div className={styles.contactFormNameLabel}>{contactForm.labels.name}</div>
          <input className={styles.contactFormNameValue}></input>
          <div className={styles.contactFormEmailLabel}>{contactForm.labels.email}</div>
          <input className={styles.contactFormEmailValue}></input>
          <div className={styles.contactFormMessageLabel}>{contactForm.labels.message}</div>
          <textarea className={styles.contactFormMessageValue}></textarea>
          <div className={styles.submitButton}>
            <Tag title={contactForm.buttonText} action={submit} resetButtonAction={() => { }} />
          </div>
        </div>
        <div className={styles.errorCard}>
          <div className={styles.contentContainer}>
            <div className={styles.imageTitleText}>
              <div className={styles.image}>
                <Image name={images.mailSent} />
              </div>
              <div className={styles.container}>
                <p>You have already sent an email today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage