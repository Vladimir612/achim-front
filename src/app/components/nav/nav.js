"use client";

import React from "react";
import styles from "./nav.module.scss";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <ul>
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
      <button>Join us</button>
    </header>
  );
};

export default Nav;
