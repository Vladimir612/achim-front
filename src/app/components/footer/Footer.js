import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.colOne}>
        <Image
          src="/logo.png"
          alt="Das Forum logo"
          className={styles.logo}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet convallis maecenas
          malesuada fringilla.
        </p>
      </div>
      <div className={styles.colTwo}>
        <p>Pages</p>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/principles">Principles</a>
          <a href="/services">Services</a>
          <a href="/events">Events</a>
          <a href="/community">Community</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className={styles.colThree}>
        <p>Services</p>
        <nav>
          <a href="#">Trainers Pool</a>
          <a href="#">Online Courses</a>
          <a href="#">Science Network</a>
          <a href="#">Structural consulting</a>
          <a href="#">Events</a>
          <a href="#">Self-study area</a>
          <a href="#">Model projects</a>
        </nav>
      </div>
      <div className={styles.colFour}>
        <p>Terms and Conditions</p>
        <nav>
          <a href="#">Terms and Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Community Rules</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
