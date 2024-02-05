"use client";
import { useState } from "react";
import NavLink from "./link/link";
import styles from "./links.module.css";

const links = [
  {
    path: "/",
    pageTitle: "Home",
  },
  {
    path: "/about",
    pageTitle: "About",
  },
  {
    path: "/contact",
    pageTitle: "Contact",
  },
  {
    path: "/blog",
    pageTitle: "Blogs",
  },
];

const isAdmin = true;
const session = true;
const Links = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((val, ind) => {
          return <NavLink routeData={val} key={ind} />;
        })}
        {session ? (
          isAdmin ? (
            <>
              <NavLink routeData={{ path: "/admin", pageTitle: "Admin" }} />
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <button className={styles.logout}>Logout</button>
          )
        ) : (
          <NavLink routeData={{ path: "/login", pageTitle: "Login" }} />
        )}
      </div>
      <button
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className={styles.menuButton}
      >
        Menu
      </button>
      {menuOpen && (
        <div className={styles.mobileLinks}>
          {links.map((val, ind) => {
            return <NavLink routeData={val} key={ind} />;
          })}
          {session ? (
            isAdmin ? (
              <>
                <NavLink routeData={{ path: "/admin", pageTitle: "Admin" }} />
                <button className={styles.logout}>Logout</button>
              </>
            ) : (
              <button className={styles.logout}>Logout</button>
            )
          ) : (
            <NavLink routeData={{ path: "/login", pageTitle: "Login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
