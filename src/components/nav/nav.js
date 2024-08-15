"use client";

import React, { useState } from "react";
import styles from "./nav.module.scss";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RegisterForm from "../registerForm/RegisterForm";

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Principles", path: "/principles" },
  { id: 4, name: "Services", path: "/services" },
  { id: 5, name: "Events", path: "/events" },
  { id: 6, name: "Community", path: "/community" },
  { id: 7, name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

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
        />
        <ul className={styles.listPc}>
          {NavLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={isActive(link.path) ? styles.active : ""}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className={styles.listPc} onClick={openModal}>
          Join us
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
                    href={link.path}
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
      <RegisterForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Nav;
