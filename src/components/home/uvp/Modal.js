import React from "react";
import styles from "./modal.module.scss";
import Image from "next/image";

const Modal = ({ isOpen, onClose, imagePath, title, fullText }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.imageContainer}>
          <Image
            src={imagePath}
            alt={title}
            className={styles.modalImage}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p>
            {fullText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>

          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
