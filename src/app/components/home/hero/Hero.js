"use client";

import React from "react";
import styles from "./hero.module.scss";
import SliderHero from "../slider/SliderHero";
import SubHeading from "../../SubHeading/SubHeading";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <SubHeading text="THE PLATFORM" />
        <h1>Where Trauma Awareness Meets Societal Change</h1>
        <button>scroll down</button>
      </div>
      <SliderHero />
    </div>
  );
};

export default Hero;
