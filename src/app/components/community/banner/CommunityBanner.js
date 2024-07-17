import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";
import SubHeading from "../../SubHeading/SubHeading";

const CommunityBanner = () => {
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
        <SubHeading text="DESCOVER OUR COMMUNITY" type="2" />
        <h1>Get Connected</h1>
        <p>
          Welcome to our vibrant community! Dive in and discover the endless
          opportunities to connect, learn, and grow together.
        </p>
      </div>
    </div>
  );
};

export default CommunityBanner;
