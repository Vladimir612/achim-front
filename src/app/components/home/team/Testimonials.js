"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./testimonials.module.scss";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);

  const testimonialsArr = [
    {
      image: "/eventImageExample.png",
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris euismod, aliquet nunc id, lacinia nisl.",
    },
    {
      image: "/eventImageExample.png",
      name: "Jane Smith",
      text: "Nulla facilisi. Sed auctor, nunc non aliquam aliquet, nisl nunc tincidunt nunc, id ultricies nisl elit ac nunc.",
    },
    {
      image: "/eventImageExample.png",
      name: "Michael Johnson",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec semper elit.",
    },
    {
      image: "/eventImageExample.png",
      name: "Emily Davis",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor, nunc non aliquam aliquet, nisl nunc tincidunt nunc, id ultricies nisl elit ac nunc.",
    },
    {
      image: "/eventImageExample.png",
      name: "David Wilson",
      text: "Donec auctor, nunc non aliquam aliquet, nisl nunc tincidunt nunc, id ultricies nisl elit ac nunc. Sed auctor, nunc non aliquam aliquet, nisl nunc tincidunt nunc, id ultricies nisl elit ac nunc.",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        <svg
          width="20"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0.30128L14.59 1.63088L20.17 6.90212L-3.93402e-07 6.90212L-3.0598e-07 8.78808L20.17 8.78807L14.58 14.0499L16 15.3889L24 7.8451L16 0.30128Z"
            fill="#FBD784"
          />
        </svg>
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
        }}
        onClick={onClick}
      >
        <svg
          width="20"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0.30128L9.41 1.63088L3.83 6.90212L24 6.90212L24 8.78808L3.83 8.78807L9.42 14.0499L8 15.3889L3.49691e-07 7.8451L8 0.30128Z"
            fill="#FBD784"
          />
        </svg>
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrowClass: "custom-slick-arrow",
    className: "custom-slick-slider testimonials",
    arrows: true,
    swipeToSlide: true,
    beforeChange: (oldIndex, _) => {
      setPrevSlide(oldIndex);
    },
    afterChange: (currentIndex) => {
      setCurrentSlide(currentIndex);
    },
  };

  const currentTestimonial = testimonialsArr[currentSlide];

  return (
    <div className={styles.testimonials}>
      <div className={styles.sliderVisible}>
        <Slider {...settings}>
          {testimonialsArr.map((event, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                index === currentSlide ? styles.slickCurrent : ""
              } ${
                index === prevSlide ||
                index === (currentSlide + 1) % testimonialsArr.length ||
                index ===
                  (currentSlide - 1 + testimonialsArr.length) %
                    testimonialsArr.length
                  ? styles.slickBeforeAfter
                  : ""
              }`}
            >
              <Image
                src={event.image}
                alt={event.name}
                className={styles.testimonialImage}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.content}>
        <h1>{currentTestimonial.name}</h1>
        <p className={`${styles.firstPar} ${merriweather.className}`}>
          <svg
            width="35"
            height="27"
            viewBox="0 0 35 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.910512 26.6116V18.9411C0.910512 16.7631 1.33665 14.5377 2.18892 12.265C3.04119 9.99225 4.16572 7.84973 5.5625 5.83742C6.95928 3.82511 8.47443 2.14424 10.108 0.79481L16.7841 4.73657C15.4583 6.81991 14.3693 8.99793 13.517 11.2707C12.6884 13.5434 12.2741 16.0765 12.2741 18.8701V26.6116H0.910512ZM18.8438 26.6116V18.9411C18.8438 16.7631 19.2699 14.5377 20.1222 12.265C20.9744 9.99225 22.099 7.84973 23.4957 5.83742C24.8925 3.82511 26.4077 2.14424 28.0412 0.79481L34.7173 4.73657C33.3916 6.81991 32.3026 8.99793 31.4503 11.2707C30.6217 13.5434 30.2074 16.0765 30.2074 18.8701V26.6116H18.8438Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>

          {currentTestimonial.text}
          <svg
            width="35"
            height="27"
            viewBox="0 0 35 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1696 0.884297V8.55475C16.1696 10.7328 15.7434 12.9582 14.8912 15.2309C14.0626 17.4799 12.9499 19.6106 11.5531 21.6229C10.1563 23.6116 8.62932 25.3043 6.97212 26.7011L0.295987 22.7593C1.4797 20.889 2.52137 18.8175 3.42099 16.5448C4.34428 14.2721 4.80593 11.6324 4.80593 8.62577V0.884297H16.1696ZM34.0318 0.884297V8.55475C34.0318 10.7328 33.6056 12.9582 32.7534 15.2309C31.9248 17.4799 30.8121 19.6106 29.4153 21.6229C28.0185 23.6116 26.4797 25.3043 24.7988 26.7011L18.1227 22.7593C19.3301 20.889 20.3836 18.8175 21.2832 16.5448C22.2065 14.2721 22.6681 11.6324 22.6681 8.62577V0.884297H34.0318Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
