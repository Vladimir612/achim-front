import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ isOpen, onClose, title, fullText }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.textContainer}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p>{fullText}</p>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
