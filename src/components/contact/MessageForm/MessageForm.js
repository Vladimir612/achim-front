"use client";
import React, { useState } from "react";
import styles from "./messageForm.module.scss";
import SubHeading from "../../SubHeading/SubHeading";

const MessageForm = ({ obj }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const {
    simply,
    writeUs,
    text,
    yourInfo,
    yourMessage,
    name,
    surname,
    email,
    phone,
    subject,
    message,
    button,
  } = obj;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.messageForm}>
      <div className={styles.content}>
        <SubHeading text={simply} type="2" />
        <h1>{writeUs}</h1>
        <p>{text}</p>
      </div>
      <form>
        <div className={styles.left}>
          <h3>{yourInfo}</h3>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">{name}*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="surname">{surname}*</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">{email}*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phoneNumber">{phone}*</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject">{subject}*</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h3>{yourMessage}</h3>
          <div className={styles.inputGroup}>
            <label htmlFor="message">{message}*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button>{button}</button>
      </form>
    </div>
  );
};

export default MessageForm;
