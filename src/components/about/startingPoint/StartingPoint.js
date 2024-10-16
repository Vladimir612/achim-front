import React, { forwardRef, useState } from "react";
import styles from "./startingPoint.module.scss";
import SubHeading from "../../SubHeading/SubHeading";
import Image from "next/image";
import Modal from "./Modal/Modal.js";

const StartingPoint = forwardRef(
  ({ subHeading, heading, par, readMoreTxt, fullText }, ref) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleReadMore = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

    return (
      <>
        <div className={styles.startingPoint} ref={ref}>
          <div className={styles.content}>
            <SubHeading text={subHeading} />
            <h1>{heading}</h1>
            <p>{par}</p>
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
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={heading}
          fullText={fullText}
        />
      </>
    );
  }
);

export default StartingPoint;
