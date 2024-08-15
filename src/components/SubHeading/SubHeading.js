import React from "react";
import styles from "./subHeading.module.scss";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
});

const SubHeading = ({ text, type }) => {
  return (
    <h3
      className={`${styles.subHeading} ${merriweather.className} ${
        type === "2" && styles.typeTwo
      }`}
    >
      {text}
    </h3>
  );
};

export default SubHeading;
