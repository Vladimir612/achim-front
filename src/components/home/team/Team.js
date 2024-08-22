import React from "react";
import styles from "./team.module.scss";
import Testimonials from "./Testimonials";
import TeamSlider from "./TeamSlider";

const Team = ({ teamList, testimonialsList, readMore }) => {
  return (
    <div className={styles.team}>
      <TeamSlider teamList={teamList} readMore={readMore} />
      <Testimonials testimonialsList={testimonialsList} />
    </div>
  );
};

export default Team;
