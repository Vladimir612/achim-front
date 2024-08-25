"use client";
import React, { useRef } from "react";
import Banner from "@/components/banner/Banner";
import ServicesComponent from "@/components/services/Services";

const ServicesWrapper = ({ obj }) => {
  const refServices = useRef(null);

  const { banner, content } = obj;

  return (
    <div>
      <Banner
        subHeading={banner.subHeading}
        heading={banner.heading}
        par={banner.par}
        customText={banner.readMore}
        imagePath="/servicesBanner.png"
        refToScroll={refServices}
      />
      <ServicesComponent ref={refServices} content={content} />
    </div>
  );
};

export default ServicesWrapper;
