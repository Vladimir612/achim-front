import React from "react";
import styles from "./uvpSingle.module.scss";
import Image from "next/image";
import SubHeading from "../../SubHeading/SubHeading";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
});

const UvpSingle = ({ number, subHeading, title, par, imagePath }) => {
  return (
    <div className={styles.uvpSingle}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={merriweather.className}>{number}</span>
          <SubHeading text={subHeading} />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p>{par}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={imagePath}
          alt="Woods"
          className={styles.eventImage}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default UvpSingle;
