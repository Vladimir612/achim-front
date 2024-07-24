import React from "react";
import styles from "./card.module.scss";

const Card = ({
  id,
  communityType,
  name,
  bulletOne,
  bulletTwo,
  bulletThree,
}) => {
  return (
    <button className={styles.card}>
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
  );
};

export default Card;
