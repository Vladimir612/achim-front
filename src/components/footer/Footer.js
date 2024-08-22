import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import { useLocale } from "next-intl";

const Footer = ({
  text,
  linksHeading,
  home,
  about,
  principles,
  services,
  events,
  community,
  contact,
  terms,
  termsFirst,
  termsSecond,
  termsThird,
}) => {
  const locale = useLocale(); // Get the current locale
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
        <p>{text}</p> {/* Dinamički tekst iz propa */}
      </div>
      <div className={styles.colTwo} style={{ margin: "0 4rem 0 1rem" }}>
        <p>{linksHeading}</p> {/* Dinamički naslov linkova */}
        <nav>
          <a href={`/${locale}`}>{home}</a>
          <a href={`/${locale}/about`}>{about}</a>
          <a href={`/${locale}/principles`}>{principles}</a>
          <a href={`/${locale}/services`}>{services}</a>
          <a href={`/${locale}/events`}>{events}</a>
          <a href={`/${locale}/community`}>{community}</a>
          <a href={`/${locale}/contact`}>{contact}</a>
        </nav>
      </div>
      <div className={styles.colFour}>
        <p>{terms}</p>
        <nav>
          <a href="#">{termsFirst}</a>
          <a href="#">{termsSecond}</a>
          <a href="#">{termsThird}</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
