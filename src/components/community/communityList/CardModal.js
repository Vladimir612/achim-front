import React from "react";
import styles from "./cardModal.module.scss";
import Image from "next/image";
import { useLocale } from "next-intl";

const CardModal = ({ isOpen, onClose, cm }) => {
  const locale = useLocale();

  if (!isOpen) return null;

  const dataArray = [
    {
      key: "selfReflection",
      labelEng: "Self Reflection",
      labelGer: "Selbstreflexion",
    },
    { key: "conn", labelEng: "Connections", labelGer: "Verbindungen" },
    {
      key: "selfGrowth",
      labelEng: "Self Growth",
      labelGer: "Persönliches Wachstum",
    },
    {
      key: "volonterism",
      labelEng: "Volonterism",
      labelGer: "Freiwilligenarbeit",
    },
    { key: "seekingHelp", labelEng: "Seeking Help", labelGer: "Hilfe suchen" },
    {
      key: "breakingIso",
      labelEng: "Breaking Isolation",
      labelGer: "Isolation überwinden",
    },
    { key: "research", labelEng: "Research", labelGer: "Forschung" },
    {
      key: "sharingExp",
      labelEng: "Sharing Experiences",
      labelGer: "Erfahrungen teilen",
    },
  ];

  const getInterestLabel = (interestEng) => {
    const matchedInterest = dataArray.find(
      (item) => item.labelEng === interestEng
    );
    if (!matchedInterest) return interestEng;

    return locale === "de"
      ? matchedInterest.labelGer
      : matchedInterest.labelEng;
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.top}>
          <div className={styles.imageContainer}>
            <Image
              src={cm.imagePath}
              alt={cm.name}
              className={styles.modalImage}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className={styles.right}>
            <h2>{cm.name}</h2>
            <h3>{cm.email}</h3>
            <h3>{cm.number}</h3>
          </div>
        </div>
        <div className={styles.interests}>
          {cm.interests.map((interest, index) => (
            <div key={index} className={styles.interestLabel}>
              {getInterestLabel(interest)}
            </div>
          ))}
        </div>
        <p style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
          {locale === "de" ? cm.textGer : cm.text}
        </p>
        <p>{locale === "de" ? cm.subjectGer : cm.textGer}</p>
      </div>
    </div>
  );
};

export default CardModal;
