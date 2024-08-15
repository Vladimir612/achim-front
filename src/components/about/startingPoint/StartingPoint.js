import React from "react";
import styles from "./startingPoint.module.scss";
import SubHeading from "../../SubHeading/SubHeading";
import Image from "next/image";

const StartingPoint = () => {
  return (
    <div className={styles.startingPoint}>
      <div className={styles.content}>
        <SubHeading text="STARTING POINT" />
        <h1>History of origin</h1>
        <p>
          If you want to know how the forum vision came about, what a dog, a
          social worker and a Netflix documentary have to do with it, then click
          here...
        </p>
      </div>
      <Image
        src="/history.png"
        alt="Das Forum history of origin"
        className={styles.image}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
};

export default StartingPoint;
