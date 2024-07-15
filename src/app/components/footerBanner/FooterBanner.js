import React from "react";
import styles from "./footerBanner.module.scss";
import SubHeading from "../SubHeading/SubHeading";
import Image from "next/image";

const FooterBanner = ({ subHeading, heading, par, customText }) => {
  return (
    <div className={styles.footerBanner}>
      <Image
        src="/footerBanner.png"
        alt="footer banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={styles.content}>
        <SubHeading text={subHeading} type="2" />
        <h1>{heading}</h1>
        <p>{par}</p>
        <button>
          <p>Join us here </p>
        </button>
      </div>
    </div>
  );
};

export default FooterBanner;
