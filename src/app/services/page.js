import React from "react";
import Banner from "../../components/banner/Banner";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import Footer from "../../components/footer/Footer";
import ServicesComponent from "../../components/services/Services";

const Services = () => {
  return (
    <div>
      <Banner
        subHeading="WHAT WE OFFER"
        heading="Transforming Society Together"
        par="Discover our offerings designed to empower societal change. From events and training to structural consulting and innovative initiatives, we're dedicated to shaping a brighter future. Join us in creating positive impact."
        customText="Explore Our Services"
        imagePath="/servicesBanner.png"
      />
      <ServicesComponent />
      <FooterBanner
        subHeading="JOIN ME"
        heading="How can you join in?"
        par="There are many ways to help shape the forum. You can become active as a trainer, join or found a local group, you can help build the club, you can become part of the forum movement with your organization or support us with your ideas, your commitment or your money."
      />
      <Footer />
    </div>
  );
};

export default Services;
