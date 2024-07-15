import React from "react";
import styles from "./nav.module.scss";
import Image from "next/image";

const Nav = () => {
  return (
    <header className={styles.navigationHeader}>
      <Image
        src="/logo.png"
        alt="Das Forum logo"
        className={styles.logo}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/principles">Principles</a>
        <a href="/services">Services</a>
        <a href="/events">Events</a>
        <a href="/community">Community</a>
        <a href="/contact">Contact</a>
      </nav>
      <button>Join us</button>
    </header>
  );
};

export default Nav;
