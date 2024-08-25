"use client";
import React, { useRef } from "react";
import { Merriweather } from "next/font/google";

import EventCard from "./EventCard/EventCard";
import SubHeading from "../SubHeading/SubHeading";

import styles from "./events.module.scss";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const Events = ({ subHeading, text, readMore }) => {
  const refToScroll = useRef(null);

  const scrollToElement = () => {
    if (refToScroll && refToScroll.current) {
      refToScroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.events}>
      <SubHeading text={subHeading} type="2" />
      <p
        style={{ color: "#fff", marginTop: "1rem", cursor: "pointer" }}
        className={merriweather.className}
        onClick={scrollToElement}
      >
        {text}
      </p>
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: "2rem" }}
      >
        <path
          d="M16.7535 8.71606C17.1663 8.30171 17.1663 7.63163 16.7535 7.21727C16.3388 6.80089 15.6647 6.80058 15.2495 7.2166L10.0625 12.4147L10.0625 1.5625C10.0625 0.975697 9.5868 0.5 9 0.5C8.4132 0.5 7.9375 0.975697 7.9375 1.5625L7.9375 12.4147L2.76573 7.21331C2.34825 6.79345 1.66894 6.79314 1.25108 7.21264C0.835797 7.62955 0.835797 8.30378 1.25108 8.7207L7.58302 15.0775C8.3647 15.8622 9.6353 15.8622 10.417 15.0775L16.7535 8.71606Z"
          fill="white"
        />
      </svg>

      <div className={styles.column} ref={refToScroll}>
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
          readMore={readMore}
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
          readMore={readMore}
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
          readMore={readMore}
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
          readMore={readMore}
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
          readMore={readMore}
        />
      </div>
    </div>
  );
};

export default Events;
