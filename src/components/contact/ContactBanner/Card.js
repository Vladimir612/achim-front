"use client";

import React, { useState } from "react";
import styles from "./card.module.scss";
import RegisterForm from "@/components/registerForm/RegisterForm";
import { useLocale } from "next-intl";

const Card = ({
  id,
  communityType,
  name,
  bulletOne,
  bulletTwo,
  bulletThree,
  regObj,
  termsFirst,
}) => {
  const locale = useLocale();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <RegisterForm
          onClose={closeModal}
          selectedType={id}
          regObj={regObj}
          termsFirst={termsFirst}
        />
      )}
      <button
        className={styles.card}
        onClick={openModal}
        style={
          locale === "de"
            ? {
                height: "13rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }
            : null
        }
      >
        <div className={styles.top}>
          <div className={styles.wrapper}>
            <img
              src={`/communityIcons/${communityType}.svg`}
              alt={communityType}
              width={24}
            />
          </div>
          <h3>{name}</h3>
        </div>
        <ul>
          <li>{bulletOne}</li>
          <li>{bulletTwo}</li>
          <li>{bulletThree}</li>
        </ul>
      </button>
    </>
  );
};

export default Card;
