"use client";

import React from "react";
import styles from "./teamSlider.module.scss";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TeamSlider = () => {
  const teamArr = [
    {
      name: "LUKAS ZIMMERMANN",
      role: "Recovery Coach",
      image: "/team/lukas.png",
      text: "Lukas partners with clients to develop personalized strategies for overcoming trauma, providing encouragement and resources for healing and well-being.",
    },
    {
      name: "EVGENIA SCHNIDER",
      role: "Trauma Recovery Specialist",
      image: "/team/evgenia.png",
      text: "Evgenia specializes in evidence-based therapies tailored to each client's needs, fostering resilience and promoting healing in trauma survivors.",
    },
    {
      name: "LARS MÜLLER",
      role: "Trauma Support Worker",
      image: "/team/lars.png",
      text: "Lars offers compassionate support and practical guidance to trauma survivors, empowering them to rebuild their lives with stability and hope.",
    },
    {
      name: "MATHIAS BAUER",
      role: "Partner",
      image: "/team/mathias.png",
      text: "Mathias partners with clients to develop personalized strategies for overcoming trauma, providing encouragement and resources for healing and well-being.",
    },
    {
      name: "LUKAS ZIMMERMANN",
      role: "Recovery Coach",
      image: "/team/lukas.png",
      text: "Lukas partners with clients to develop personalized strategies for overcoming trauma, providing encouragement and resources for healing and well-being.",
    },
    {
      name: "EVGENIA SCHNIDER",
      role: "Trauma Recovery Specialist",
      image: "/team/evgenia.png",
      text: "Evgenia specializes in evidence-based therapies tailored to each client's needs, fostering resilience and promoting healing in trauma survivors.",
    },
    {
      name: "LARS MÜLLER",
      role: "Trauma Support Worker",
      image: "/team/lars.png",
      text: "Lars offers compassionate support and practical guidance to trauma survivors, empowering them to rebuild their lives with stability and hope.",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "2.7rem",
          height: "2.5rem",
          background: "#FBD784",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <svg
          width="27"
          height="25"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0411 14.2353H2.05489C1.65675 14.2353 1.32574 14.1109 1.06185 13.8621C0.79796 13.6132 0.666016 13.3011 0.666016 12.9256C0.666016 12.5502 0.79796 12.2381 1.06185 11.9892C1.32574 11.7404 1.65675 11.616 2.05489 11.616H22.0411L13.0132 3.10297C12.7355 2.84103 12.5989 2.53543 12.6035 2.18616C12.6082 1.83692 12.7494 1.53133 13.0271 1.26939C13.3049 1.0162 13.629 0.887417 13.9993 0.883042C14.3697 0.878668 14.6938 1.00745 14.9716 1.26939L26.3605 12.0089C26.5086 12.1486 26.6128 12.2926 26.673 12.4411C26.7331 12.5895 26.7632 12.751 26.7632 12.9256C26.7632 13.1003 26.7331 13.2618 26.673 13.4102C26.6128 13.5587 26.5086 13.7027 26.3605 13.8424L14.9716 24.5819C14.7031 24.8351 14.3813 24.9617 14.0063 24.9617C13.6313 24.9617 13.3049 24.8351 13.0271 24.5819C12.7494 24.32 12.6105 24.0122 12.6105 23.6586C12.6105 23.305 12.7494 22.9972 13.0271 22.7352L22.0411 14.2353Z"
            fill="#1E2826"
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
          width: "2.7rem",
          height: "2.5rem",
          background: "#FBD784",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <svg
          width="27"
          height="25"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.95894 14.2353H24.9451C25.3432 14.2353 25.6743 14.1109 25.9382 13.8621C26.202 13.6132 26.334 13.3011 26.334 12.9256C26.334 12.5502 26.202 12.2381 25.9382 11.9892C25.6743 11.7404 25.3432 11.616 24.9451 11.616H4.95894L13.9868 3.10297C14.2645 2.84103 14.4011 2.53543 14.3965 2.18616C14.3918 1.83692 14.2506 1.53133 13.9729 1.26939C13.6951 1.0162 13.371 0.887417 13.0007 0.883042C12.6303 0.878668 12.3062 1.00745 12.0284 1.26939L0.639526 12.0089C0.491388 12.1486 0.38722 12.2926 0.327026 12.4411C0.266859 12.5895 0.236774 12.751 0.236774 12.9256C0.236774 13.1003 0.266859 13.2618 0.327026 13.4102C0.38722 13.5587 0.491388 13.7027 0.639526 13.8424L12.0284 24.5819C12.2969 24.8351 12.6187 24.9617 12.9937 24.9617C13.3687 24.9617 13.6951 24.8351 13.9729 24.5819C14.2506 24.32 14.3895 24.0122 14.3895 23.6586C14.3895 23.305 14.2506 22.9972 13.9729 22.7352L4.95894 14.2353Z"
            fill="#1E2826"
          />
        </svg>
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrowClass: "custom-slick-arrow",
    className: "custom-slick-slider team",
    dotsClass: "custom-slick-dots",
    arrows: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className={styles.teamSlider}>
      <Slider {...settings}>
        {teamArr.map((teamMember, index) => (
          <div key={index} className={styles.teamMember}>
            <Image
              src={teamMember.image}
              alt={teamMember.name}
              className={styles.image}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <h3>{teamMember.name}</h3>
            <p className={styles.role}>{teamMember.role}</p>
            <p>{teamMember.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
