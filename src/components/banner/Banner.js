"use client";
import React, { useRef } from "react";
import styles from "./banner.module.scss";
import SubHeading from "../SubHeading/SubHeading";
import Image from "next/image";
import StartingPoint from "../about/startingPoint/StartingPoint";

const Banner = ({
  subHeading,
  imagePath,
  heading,
  par,
  aboutBanner,
  customText,
  refToScroll,
  startingPointSubHeading,
  startingPointHeading,
  startingPointPar,
  readMoreTxt,
  fullText,
}) => {
  const refAbout = useRef(null);

  const scrollToElement = () => {
    if (aboutBanner && refAbout.current) {
      refAbout.current.scrollIntoView({ behavior: "smooth" });
    } else if (refToScroll && refToScroll.current) {
      refToScroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.banner}>
      <Image
        src={imagePath}
        alt="Das forum about image"
        className={styles.eventImage}
        fill
        style={{ objectFit: "cover", zIndex: "-1" }}
        priority
      />
      <div className={styles.content}>
        <SubHeading text={subHeading} type="2" />
        <h1>{heading}</h1>
        <p>{par}</p>
        <button onClick={scrollToElement}>
          <p>{customText}</p>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7535 8.71606C17.1663 8.30171 17.1663 7.63163 16.7535 7.21727C16.3388 6.80089 15.6647 6.80058 15.2495 7.2166L10.0625 12.4147L10.0625 1.5625C10.0625 0.975697 9.5868 0.5 9 0.5C8.4132 0.5 7.9375 0.975697 7.9375 1.5625L7.9375 12.4147L2.76573 7.21331C2.34825 6.79345 1.66894 6.79314 1.25108 7.21264C0.835797 7.62955 0.835797 8.30378 1.25108 8.7207L7.58302 15.0775C8.3647 15.8622 9.6353 15.8622 10.417 15.0775L16.7535 8.71606Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {aboutBanner && (
        <StartingPoint
          subHeading={startingPointSubHeading}
          heading={startingPointHeading}
          par={startingPointPar}
          readMoreTxt={readMoreTxt}
          fullText={fullText}
          ref={refAbout}
        />
      )}
    </div>
  );
};

export default Banner;
