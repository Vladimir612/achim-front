"use client";
import React, { useRef } from "react";
import Banner from "@/components/banner/Banner";
import Card from "@/components/principles/card/Card";

const PrinciplesWrapper = ({ obj }) => {
  const refPrinciples = useRef(null);

  const { banner, sections } = obj;

  return (
    <div>
      <Banner
        subHeading={banner.subHeading}
        heading={banner.heading}
        par={banner.par}
        customText={banner.readMore}
        imagePath="/principlesBanner.png"
        refToScroll={refPrinciples}
      />
      <div
        style={{
          background: "#0B1D26",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem 0",
        }}
        ref={refPrinciples}
      >
        {sections.map((section, index) => (
          <Card
            key={index}
            number={section.number}
            subHeading={section.subHeading}
            heading={section.heading}
            text={section.text}
            imagePath={section.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default PrinciplesWrapper;
