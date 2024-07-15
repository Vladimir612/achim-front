import React from "react";
import styles from "./aboutSection.module.scss";
import Image from "next/image";

const AboutSection = ({ imagePath, heading, text }) => {
  return (
    <div className={styles.aboutSection}>
      <Image
        src={imagePath}
        alt={heading}
        className={styles.aboutSectionImage}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default AboutSection;
