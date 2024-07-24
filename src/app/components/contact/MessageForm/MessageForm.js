import React from "react";
import styles from "./messageForm.module.scss";
import SubHeading from "../../SubHeading/SubHeading";

const MessageForm = () => {
  return (
    <div className={styles.messageForm}>
      <div className={styles.content}>
        <SubHeading text="OR SIMPLY" type="2" />
        <h1>Write Us A Message</h1>
        <p>
          Have a question, need help, or just want to share a supportive
          message? Don't hesitate to reach out—we're here for you! Your thoughts
          and inquiries are always welcome. 😊
        </p>
      </div>
      <form>
        <div className={styles.left}>
          <h3>Your Info</h3>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="surname">Surname</label>
              <input type="text" id="surname" name="surname" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="surname">Surname</label>
              <input type="text" id="surname" name="surname" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="surname">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
        </div>
        <div className={styles.right}>
          <h3>Your Message</h3>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default MessageForm;
