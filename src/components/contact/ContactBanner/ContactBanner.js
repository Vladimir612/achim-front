import React from "react";
import styles from "./contactBanner.module.scss";
import Image from "next/image";
import SubHeading from "../../SubHeading/SubHeading";
import Card from "./Card";

const ContactBanner = ({ subHeading, heading, par, customText }) => {
  return (
    <div className={styles.contactBanner}>
      <Image
        src="/footerBanner.png"
        alt="footer banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={styles.content}>
        <SubHeading text={subHeading} type="2" />
        <h1>{heading}</h1>
        <p>{par}</p>
        <button>
          <p>Select The Role</p>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7535 8.71606C17.1663 8.30171 17.1663 7.63163 16.7535 7.21727C16.3388 6.80089 15.6647 6.80058 15.2495 7.2166L10.0625 12.4147L10.0625 1.5625C10.0625 0.975697 9.5868 0.5 9 0.5C8.4132 0.5 7.9375 0.975697 7.9375 1.5625L7.9375 12.4147L2.76573 7.21331C2.34825 6.79345 1.66894 6.79314 1.25108 7.21264C0.835797 7.62955 0.835797 8.30378 1.25108 8.7207L7.58302 15.0775C8.3647 15.8622 9.6353 15.8622 10.417 15.0775L16.7535 8.71606Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={styles.cards}>
        <Card
          id="C3"
          communityType="partners"
          name="Partners"
          bulletOne="Resources, and funding"
          bulletTwo="Strategic planning"
          bulletThree="Collaborations"
        />
        <Card
          id="C2"
          communityType="organizations"
          name="Organizations"
          bulletOne="Access and share resources"
          bulletTwo="Co-create events and webinars"
          bulletThree="Networking and collaboration"
        />
        <Card
          id="CM1"
          communityType="individuals"
          name="Individuals"
          bulletOne="Educational resources & support"
          bulletTwo="Community connection"
          bulletThree="Volonterism"
        />
        <Card
          id="CM2"
          communityType="trainers"
          name="Trainers"
          bulletOne="Training programs & workshops"
          bulletTwo="Provide mentorship"
          bulletThree="Collaborations"
        />
        <Card
          id="C1"
          communityType="events"
          name="Institution"
          bulletOne="Networking opportunities"
          bulletTwo="Cross marketing opportunities"
          bulletThree="Co-organising events"
        />
      </div>
    </div>
  );
};

export default ContactBanner;