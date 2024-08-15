import React from "react";
import styles from "./team.module.scss";
import Testimonials from "./Testimonials";
import TeamSlider from "./TeamSlider";

const Team = () => {
  return (
    <div className={styles.team}>
      <TeamSlider />
      <Testimonials />
    </div>
  );
};

export default Team;
