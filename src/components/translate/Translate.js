import React from "react";
import styles from "./translate.module.scss";
// import { useTranslation } from "react-i18next";

const Translate = () => {
  // const { i18n } = useTranslation();

  // const handleClick = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className={styles.translate}>
      <ul>
        {/* <li onClick={() => handleClick("en")}>English</li>
        <li onClick={() => handleClick("de")}>German</li> */}
      </ul>
    </div>
  );
};

export default Translate;
