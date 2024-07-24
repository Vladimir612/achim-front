"use client";
import React from "react";
import SliderHeroEvents from "../components/events/SliderHeroEvents/SliderHeroEvents";
import EventCard from "../components/events/EventCard/EventCard";
import { Merriweather } from "next/font/google";
import SubHeading from "../components/SubHeading/SubHeading";
import Footer from "../components/footer/Footer";
import FooterBanner from "../components/footerBanner/FooterBanner";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
});

const Events = () => {
  return (
    <div>
      <SliderHeroEvents />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#0B1D26",
          padding: "4rem 0",
          gap: "1rem",
        }}
      >
        <SubHeading text="EVENTS" type="2" />
        <p
          style={{ color: "#fff", marginTop: "1rem" }}
          className={merriweather.className}
        >
          See All Our Past Events
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

        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
        />
        <EventCard
          imagePath="/aboutFirst.png"
          heading="Event 1"
          date="26. - 28. September 2024."
          text="The forum brings together the issue of trauma with the issue of social justice and creates a powerful vision of a trauma-informed, fairer and more peaceful society with effective social systems."
        />
      </div>
      <FooterBanner
        subHeading="JOIN ME"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <Footer />
    </div>
  );
};

export default Events;
