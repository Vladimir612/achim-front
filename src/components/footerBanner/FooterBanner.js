import React from "react";
import styles from "./footerBanner.module.scss";
import SubHeading from "../SubHeading/SubHeading";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";

const FooterBanner = ({ subHeading, heading, par, btnText }) => {
  const locale = useLocale(); // Get the current locale
  return (
    <div className={styles.footerBanner}>
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
          <Link
            href={`/${locale}/contact`} // Add locale to the path
          >
            <p>{btnText}</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FooterBanner;
