"use client";
import React from "react";
import SliderHeroEvents from "../../components/events/SliderHeroEvents/SliderHeroEvents";
import Footer from "../../components/footer/Footer";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import EventsComponent from "../../components/events/Events";

const Events = () => {
  return (
    <div>
      <SliderHeroEvents />
      <EventsComponent />
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
