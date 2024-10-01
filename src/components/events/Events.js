"use client";
import React, { useEffect, useRef, useState } from "react";
import { Merriweather } from "next/font/google";
import EventCard from "./EventCard/EventCard";
import SubHeading from "../SubHeading/SubHeading";
import { useLocale } from "next-intl";
import axios from "axios";
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

  const [events, setEvents] = useState([]);

  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;
  const locale = useLocale();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/events`);
        setEvents(response.data);
      } catch (err) {
        console.log(
          err.response.data.error
            ? err.response.data.error
            : "Internal Server error"
        );
      }
    };

    if (typeof window !== "undefined") {
      fetchEvents();
    }
  }, []);

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
        {events.map((event) => (
          <EventCard
            key={event._id}
            imagePath={event.bgImage}
            heading={locale === "de" ? event.titleGer : event.titleEng}
            date={
              locale === "de"
                ? event.datesFirstFieldGer + " " + event.datesSecondFieldGer
                : event.datesFirstFieldEng + " " + event.datesSecondFieldEng
            }
            text={locale === "de" ? event.descriptionGer : event.descriptionEng}
            readMore={readMore}
            readMoreLink={locale === "de" ? event.pdfGerLink : event.pdfEngLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
