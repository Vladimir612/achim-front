import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

const Card = ({
  id,
  imagePath,
  name,
  text,
  email,
  number,
  communityType,
  interests,
}) => {
  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;
  const fullImagePath = `${baseURL}/images/${imagePath}`;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Image
            src={fullImagePath}
            alt={name}
            className={styles.cardImage}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <h3>{name}</h3>
        </div>
        <div className={styles.right}>
          <img
            src="/communityIcons/info.svg"
            alt="info icon"
            width={24}
            style={{ cursor: "pointer" }}
          />
          <img
            src={`/communityIcons/dark/${communityType}.svg`}
            alt={communityType}
            width={24}
          />
        </div>
      </div>
      <p className={styles.body}>{text}</p>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h5>{email}</h5>
        </div>
        <div className={styles.right}>
          <h5>{number}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
