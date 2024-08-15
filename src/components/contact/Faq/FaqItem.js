"use client";

import React, { useState } from "react";
import styles from "./faqItem.module.scss";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

const FaqItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}>
      <div className={styles.header}>
        <h3>
          <span>{number}</span> {question}
        </h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          <span>
            {isOpen ? (
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.17436 11.64H18.399C19.0477 11.64 19.5735 11.0491 19.5735 10.3199C19.5735 9.59088 19.0479 9 18.399 9H1.17436C0.525795 9.00018 0 9.59106 0 10.3201C0 11.0491 0.525795 11.64 1.17436 11.64Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8999 9.89997H12.1V1.09993C12.1 0.492864 11.6072 0 10.9999 0C10.3928 0 9.89997 0.492864 9.89997 1.09993V9.89997H1.09993C0.492864 9.89997 0 10.3928 0 10.9999C0 11.6072 0.492864 12.1 1.09993 12.1H9.89997V20.8999C9.89997 21.5071 10.3928 22 10.9999 22C11.6072 22 12.1 21.5071 12.1 20.8999V12.1H20.8999C21.5071 12.1 22 11.6072 22 10.9999C22 10.3928 21.5071 9.89997 20.8999 9.89997Z"
                  fill="white"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
      <div
        className={styles.answer}
        style={{ maxHeight: isOpen ? "10rem" : "0" }}
      >
        <p className={merriweather.className}>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
