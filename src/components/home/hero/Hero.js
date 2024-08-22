"use client";

import React, { useRef } from "react";
import styles from "./hero.module.scss";
import SliderHero from "../slider/SliderHero";
import SubHeading from "../../SubHeading/SubHeading";

const Hero = ({ subHeading, title, scrollTxt, readMoreTxt }) => {
  const slider = useRef(null);

  const scrollToElement = () => {
    if (slider.current) {
      slider.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <SubHeading text={subHeading} />
        <h1>{title}</h1>
        <button onClick={scrollToElement}>
          {scrollTxt + " "}
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <SliderHero readMoreTxt={readMoreTxt} ref={slider} />
    </div>
  );
};

export default Hero;
