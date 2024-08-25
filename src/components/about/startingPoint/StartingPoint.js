import React, { forwardRef } from "react";
import styles from "./startingPoint.module.scss";
import SubHeading from "../../SubHeading/SubHeading";
import Image from "next/image";

const StartingPoint = forwardRef(({ subHeading, heading, par }, ref) => {
  return (
    <div className={styles.startingPoint} ref={ref}>
      <div className={styles.content}>
        <SubHeading text={subHeading} />
        <h1>{heading}</h1>
        <p>{par}</p>
      </div>
      <Image
        src="/history.png"
        alt={heading}
        className={styles.image}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
});

export default StartingPoint;
