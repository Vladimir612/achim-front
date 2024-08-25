import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";
import SubHeading from "../../SubHeading/SubHeading";

const CommunityBanner = ({ subHeading, heading, text }) => {
  return (
    <div className={styles.banner}>
      <Image
        src="/communityBanner.png"
        alt="Das forum about image"
        className={styles.eventImage}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={styles.content}>
        <SubHeading text={subHeading} type="2" />
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommunityBanner;
