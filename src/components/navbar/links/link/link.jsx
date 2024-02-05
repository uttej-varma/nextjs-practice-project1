"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./link.module.css";
const NavLink = ({ routeData }) => {
  const path = usePathname();
  return (
    <Link
      className={`${styles.container} ${
        path === routeData.path && styles.active
      }`}
      href={routeData.path}
    >
      {routeData.pageTitle}
    </Link>
  );
};

export default NavLink;
