import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import { useLocale } from "next-intl";

const Footer = ({
  text,
  home,
  about,
  principles,
  services,
  events,
  community,
  contact,
  termsFirst,
  germany,
}) => {
  const locale = useLocale();
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
        <p>{text}</p>
        <p className={styles.address}>
          <a href="mailto:info@traumaundnervensystem.org">
            info@traumaundnervensystem.org
          </a>
          <br />
          Bonner Talweg 235, <br /> 53129 Bonn <br /> {germany}
        </p>
      </div>
      <div className={styles.colTwo}>
        <nav>
          <a href={`/${locale}`}>{home}</a>
          <a href={`/${locale}/about`}>{about}</a>
          <a href={`/${locale}/principles`}>{principles}</a>
          <a href={`/${locale}/services`}>{services}</a>
          <a href={`/${locale}/events`}>{events}</a>
          <a href={`/${locale}/community`}>{community}</a>
          <a href={`/${locale}/contact`}>{contact}</a>
          <a
            href={locale === "de" ? "/pdfs/termsGer.pdf" : "/pdfs/termsEng.pdf"}
            target="_blank"
          >
            {termsFirst}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
