"use client";

import React, { useState } from "react";
import styles from "./card.module.scss";
import RegisterForm from "@/components/registerForm/RegisterForm";

const Card = ({
  id,
  communityType,
  name,
  bulletOne,
  bulletTwo,
  bulletThree,
  regObj,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <RegisterForm onClose={closeModal} selectedType={id} regObj={regObj} />
      )}
      <button className={styles.card} onClick={openModal}>
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
