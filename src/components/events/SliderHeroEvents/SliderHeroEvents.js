"use client";
import React, { useEffect, useState } from "react";
import styles from "./sliderHeroEvents.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Merriweather } from "next/font/google";
import { useLocale } from "next-intl";
import axios from "axios";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const SliderHeroEvents = ({ readMore }) => {
  const [events, setEvents] = useState([]);

  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;
  const locale = useLocale();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/events`);
        setEvents(response.data);
        setCurrentEvent(response.data[0]);
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "green",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          backgroundColor: "#FBD784",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={onClick}
      >
        <img src="/arrowForwardDark.svg" alt="Arrow forward" width={15} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "green",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          backgroundColor: "#FBD784",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={onClick}
      >
        <img src="/arrowBackwardDark.svg" alt="Arrow forward" width={15} />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrowClass: "custom-slick-arrow",
    className: "custom-slick-slider events",
    arrows: true,
    swipeToSlide: true,
    afterChange: (currentIndex) => {
      setCurrentSlide(currentIndex);
    },
  };

  return (
    <div className={styles.sliderHeroEvents}>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={event.bgImage}
              alt={event.titleEng}
              className={styles.eventImage}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
      </Slider>
      {events && events.length > 0 && (
        <div className={styles.content}>
          <h1>
            {locale === "de"
              ? events[currentSlide].titleGer
              : events[currentSlide].titleEng}
          </h1>
          <p className={`${styles.firstPar} ${merriweather.className}`}>
            {locale === "de"
              ? events[currentSlide].descriptionGer
              : events[currentSlide].descriptionEng}
          </p>
          <div className={styles.columns}>
            <div className={styles.col}>
              <img src="/event.svg" alt="Event icon" width={30} />
              <div className={styles.data}>
                <p className="first">
                  {locale === "de"
                    ? events[currentSlide].datesFirstFieldGer
                    : events[currentSlide].datesFirstFieldEng}
                </p>
                <p className="second">
                  {locale === "de"
                    ? events[currentSlide].datesSecondFieldGer
                    : events[currentSlide].datesSecondFieldEng}
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <img src="/alarm.svg" alt="Alarm icon" width={30} />
              <div className={styles.data}>
                <p className="first">
                  {locale === "de"
                    ? events[currentSlide].timeFirstFieldGer
                    : events[currentSlide].timeFirstFieldEng}
                </p>
                <p className="second">
                  {locale === "de"
                    ? events[currentSlide].timeSecondFieldGer
                    : events[currentSlide].timeSecondFieldEng}
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <a
                href={events[currentSlide].addressLink}
                className={styles.locLink}
                target="_blank"
              >
                <img src="/location_on.svg" alt="Location icon" width={30} />
                <div className={styles.data}>
                  <p className="first">
                    {locale === "de"
                      ? events[currentSlide].addressTextGer
                      : events[currentSlide].addressTextEng}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              className={`${styles.btnCta} ${styles.borderBg}`}
              href={
                locale === "de"
                  ? events[currentSlide].pdfGerLink
                  : events[currentSlide].pdfEngLink
              }
            >
              {readMore}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderHeroEvents;
