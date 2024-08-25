import React from "react";
import styles from "./eventCard.module.scss";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const EventCard = ({ imagePath, heading, date, text, readMore }) => {
  return (
    <div className={styles.eventCard}>
      <Image
        src={imagePath}
        alt={heading}
        className={styles.image}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={styles.right}>
        <div className={styles.header}>
          <h2>{heading}</h2>
          <h4>{date}</h4>
        </div>
        <p className={merriweather.className}>{text}</p>
        <button>
          {readMore}{" "}
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
              fill="#FBD784"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
