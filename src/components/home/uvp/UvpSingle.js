"use client";

import React, { useState } from "react";
import styles from "./uvpSingle.module.scss";
import Image from "next/image";
import SubHeading from "../../SubHeading/SubHeading";
import { Merriweather } from "next/font/google";
import Modal from "./Modal";
import Link from "next/link";
import { useLocale } from "next-intl";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
});

const UvpSingle = ({
  number,
  subHeading,
  title,
  par,
  imagePath,
  fullText,
  readMoreTxt,
  link,
  linkText,
}) => {
  const locale = useLocale();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReadMore = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.uvpSingle}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={merriweather.className}>{number}</span>
          <SubHeading text={subHeading} />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p>{par}</p>
        {link ? (
          <Link href={`/${locale}${link}`} className={styles.linkText}>
            {linkText + " "}
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                fill="#FBD784"
              />
            </svg>
          </Link>
        ) : (
          <button onClick={handleReadMore}>
            {readMoreTxt + " "}
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                fill="#FBD784"
              />
            </svg>
          </button>
        )}
      </div>
      <div className={styles.image}>
        <Image
          src={imagePath}
          alt="Woods"
          className={styles.eventImage}
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes=""
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imagePath={imagePath}
        title={title}
        fullText={fullText}
      />
    </div>
  );
};

export default UvpSingle;
