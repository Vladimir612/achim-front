import React, { forwardRef, useEffect, useState } from "react";
import styles from "./sliderHero.module.scss";
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

const SliderHero = forwardRef(({ readMoreTxt }, ref) => {
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
          backgroundColor: "#2A5251",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={onClick}
      >
        <img src="/arrowForward.svg" alt="Arrow forward" width={20} />
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
          backgroundColor: "#2A5251",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={onClick}
      >
        <img src="/arrowBackward.svg" alt="Arrow forward" width={20} />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrowClass: "custom-slick-arrow",
    className: "custom-slick-slider",
    arrows: true,
    swipeToSlide: true,
    customPaging: () => <div></div>,
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
    <div className={styles.sliderHero} ref={ref}>
      <Slider {...settings}>
        {events.map((event) => (
          <div className={styles.card} key={event._id}>
            <Image
              src={event.bgImage}
              alt={event.titleEng}
              className={styles.eventImage}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className={styles.content}>
              <h1>{locale === "de" ? event.titleGer : event.titleEng}</h1>
              <p className={`${styles.firstPar} ${merriweather.className}`}>
                {locale === "de" ? event.descriptionGer : event.descriptionEng}
              </p>
              <div className={styles.columns}>
                <div className={styles.col}>
                  <img src="/event.svg" alt="Arrow forward" width={30} />
                  <div className={styles.data}>
                    <p className="first">
                      {locale === "de"
                        ? event.datesFirstFieldGer
                        : event.datesFirstFieldEng}
                    </p>
                    <p className="second">
                      {locale === "de"
                        ? event.datesSecondFieldGer
                        : event.datesSecondFieldEng}
                    </p>
                  </div>
                </div>
                <div className={styles.col}>
                  <img src="/alarm.svg" alt="Arrow forward" width={30} />
                  <div className={styles.data}>
                    <p className="first">
                      {locale === "de"
                        ? event.timeFirstFieldGer
                        : event.timeFirstFieldEng}
                    </p>
                    <p className="second">
                      {locale === "de"
                        ? event.timeSecondFieldGer
                        : event.timeSecondFieldEng}
                    </p>
                  </div>
                </div>
                <div className={styles.col}>
                  <a href={event.addressLink} className={styles.locLink}>
                    <img
                      src="/location_on.svg"
                      alt="Arrow forward"
                      width={30}
                    />
                    <div className={styles.data}>
                      <p className="first">
                        {locale === "de"
                          ? event.addressTextGer
                          : event.addressTextEng}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className={styles.buttons}>
                <a
                  className={`${styles.btnCta} ${styles.borderBg}`}
                  href={locale === "de" ? event.pdfGerLink : event.pdfEngLink}
                >
                  {readMoreTxt}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default SliderHero;
