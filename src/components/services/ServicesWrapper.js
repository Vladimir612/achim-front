"use client";
import React, { useRef } from "react";
import Banner from "@/components/banner/Banner";
import ServicesComponent from "@/components/services/Services";

const ServicesWrapper = () => {
  const refServices = useRef(null);

  return (
    <div>
      <Banner
        subHeading="WHAT WE OFFER"
        heading="Transforming Society Together"
        par="Discover our offerings designed to empower societal change. From events and training to structural consulting and innovative initiatives, we're dedicated to shaping a brighter future. Join us in creating positive impact."
        customText="Explore Our Services"
        imagePath="/servicesBanner.png"
        refToScroll={refServices}
      />
      <ServicesComponent ref={refServices} />
    </div>
  );
};

export default ServicesWrapper;
