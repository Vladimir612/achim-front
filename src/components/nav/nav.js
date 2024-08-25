"use client";

import React, { useState } from "react";
import styles from "./nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl"; // Import for localization
import RegisterForm from "../registerForm/RegisterForm";

const Nav = ({
  home,
  about,
  principles,
  services,
  events,
  community,
  contact,
  btn,
  regObj,
}) => {
  const pathname = usePathname();
  const locale = useLocale(); // Get the current locale

  const NavLinks = [
    { id: 1, name: home, path: "/" },
    { id: 2, name: about, path: "/about" },
    { id: 3, name: principles, path: "/principles" },
    { id: 4, name: services, path: "/services" },
    { id: 5, name: events, path: "/events" },
    { id: 6, name: community, path: "/community" },
    { id: 7, name: contact, path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return pathname === `/${locale}`;
    }
    return `/${locale}${path}` === pathname;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <header className={styles.navigationHeader}>
        <Image
          src="/logo.png"
          alt="Das Forum logo"
          className={styles.logo}
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes=""
        />
        <ul className={styles.listPc}>
          {NavLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={`/${locale}${link.path}`} // Add locale to the path
                  className={isActive(link.path) ? styles.active : ""}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className={styles.listPc} onClick={openModal}>
          {btn}
        </button>
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
        <div className={`${styles.responsive} ${isOpen ? styles.open : ""}`}>
          <ul>
            {NavLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={`/${locale}${link.path}`} // Add locale to the path
                    className={isActive(link.path) ? styles.active : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button onClick={openModal}>Join us</button>
        </div>
      </header>
      {isModalOpen && (
        <RegisterForm
          onClose={closeModal}
          selectedType={"C1"}
          regObj={regObj}
        />
      )}
    </>
  );
};

export default Nav;
