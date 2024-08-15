import React, { useState } from "react";
import styles from "./sliderHeroEvents.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const SliderHeroEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const eventsArr = [
    {
      image: "/eventImageExample.png",
      title: "Trauma & Nervous System Conference",
      description:
        "Join us for an insightful lecture on trauma and the nervous system, exploring vital insights to enhance understanding and support. Reserve your spot now!",
      date: "26. - 28. September 2024",
      time: "Start: 11:00 AM - End: 20:00 PM",
      location: "Bahnhofstrasse 25, 8001 Zurich",
      price: "Daily: 50.00 CHF - 3 Days: 120.00 CHF",
    },
    {
      image: "/eventImageExample.png",
      title: "Health & Wellness Expo",
      description:
        "Discover the latest trends in health and wellness at our expo. Attend workshops and meet industry experts. Don't miss out!",
      date: "15. - 17. October 2024",
      time: "Start: 10:00 AM - End: 18:00 PM",
      location: "Messeplatz 10, 4058 Basel",
      price: "Daily: 40.00 CHF - 3 Days: 100.00 CHF",
    },
    {
      image: "/eventImageExample.png",
      title: "Technology & Innovation Summit",
      description:
        "Explore the future of technology and innovation at our summit. Engage with thought leaders and network with professionals.",
      date: "5. - 7. November 2024",
      time: "Start: 9:00 AM - End: 17:00 PM",
      location: "Palexpo, Route François-Peyrot 30, 1218 Le Grand-Saconnex",
      price: "Daily: 60.00 CHF - 3 Days: 150.00 CHF",
    },
  ];

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

  const currentEvent = eventsArr[currentSlide];

  return (
    <div className={styles.sliderHeroEvents}>
      <Slider {...settings}>
        {eventsArr.map((event, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={event.image}
              alt={event.title}
              className={styles.eventImage}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
      </Slider>
      <div className={styles.content}>
        <h1>{currentEvent.title}</h1>
        <p className={`${styles.firstPar} ${merriweather.className}`}>
          {currentEvent.description}
        </p>
        <div className={styles.columns}>
          <div className={styles.col}>
            <img src="/event.svg" alt="Event icon" width={30} />
            <div className={styles.data}>
              <p className="first">{currentEvent.date}</p>
            </div>
          </div>
          <div className={styles.col}>
            <img src="/alarm.svg" alt="Alarm icon" width={30} />
            <div className={styles.data}>
              <p className="first">{currentEvent.time}</p>
            </div>
          </div>
          <div className={styles.col}>
            <img src="/location_on.svg" alt="Location icon" width={30} />
            <div className={styles.data}>
              <p className="first">{currentEvent.location}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={`${styles.btnCta} ${styles.borderBg}`}>
            More details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHeroEvents;
