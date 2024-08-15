import React from "react";
import styles from "./card.module.scss";
import SubHeading from "../../SubHeading/SubHeading";
import { Merriweather } from "next/font/google";
import Image from "next/image";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
});

const Card = ({ number, subHeading, heading, text, imagePath }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={merriweather.className}>{number}</span>
          <SubHeading text={subHeading} />
        </div>
        <h1 className={styles.title}>{heading}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={imagePath}
          alt={heading}
          className={styles.eventImage}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default Card;
