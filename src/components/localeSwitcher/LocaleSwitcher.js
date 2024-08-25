"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import styles from "./localeSwitcher.module.scss";

const LocaleSwitcher = ({ route }) => {
  const locale = useLocale();
  const [activeLocale, setActiveLocale] = useState(locale);

  const locales = ["en", "de"]; // Add or remove locales as needed
  const sortedLocales = [
    ...locales.filter((lng) => lng !== activeLocale),
    activeLocale,
  ];

  const handleClick = (lng) => {
    setActiveLocale(lng);
  };

  return (
    <div className={styles.localeSwitcher}>
      <ul>
        {sortedLocales.map((lng) => (
          <li
            key={lng}
            className={lng === activeLocale ? styles.activeLocale : ""}
          >
            <Link
              href={route ? `/${lng}/${route}` : lng}
              locale={lng}
              onClick={() => handleClick(lng)}
            >
              <img
                src={`/flags/${lng}.svg`}
                alt={lng}
                className={styles.flagIcon}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocaleSwitcher;
