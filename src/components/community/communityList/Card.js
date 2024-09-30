import React, { useState } from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import CardModal from "./CardModal";
import { useLocale } from "next-intl";

const Card = ({
  id,
  imagePath,
  name,
  text,
  textGer,
  email,
  number,
  communityType,
  interests,
  subject,
  subjectGer,
}) => {
  const locale = useLocale();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleReadMore = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const cm = {
    imagePath: imagePath,
    name: name,
    text: text,
    textGer: textGer,
    email: email,
    number: number,
    communityType: communityType,
    interests: interests,
    subject: subject,
    subjectGer: subjectGer,
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Image
              src={imagePath}
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
              onClick={handleReadMore}
            />
            <img
              src={`/communityIcons/dark/${communityType}.svg`}
              alt={communityType}
              width={24}
            />
          </div>
        </div>
        <p className={styles.body}>{locale === "de" ? textGer : text}</p>
        <div className={styles.footer}>
          <div className={styles.left}>
            <h5>{email}</h5>
          </div>
          <div className={styles.right}>
            <h5>{number}</h5>
          </div>
        </div>
      </div>
      <CardModal isOpen={isModalOpen} onClose={handleCloseModal} cm={cm} />
    </>
  );
};

export default Card;
