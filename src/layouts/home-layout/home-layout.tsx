import clsx from "clsx";
import styles from "./home-layout.module.css";
import { Outlet, Link, NavLink } from "react-router";
import { useMediaQuery, useScrollOffset } from "@/hooks";
import { SocialSection } from "@/components";
import { socialInfo } from "@/data";

interface NavigationLink {
  label: string;
  path: string;
}

const navigationLinks: NavigationLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const HomeLayout = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const { isScrolled } = useScrollOffset(matches ? 10 : 50);

  return (
    <>
      <header
        className={clsx([styles["header"], isScrolled && styles["glass"]])}
      >
        <nav className={styles["nav"]}>
          <ul className={styles["ul"]}>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? styles["active"] : ""
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/" className={styles["logo"]}>
            <img src="/logo-32x32.png" width="32px" height="32px" />
          </Link>
        </nav>
      </header>
      <section className={styles["body"]}>
        <Outlet />
      </section>
      <footer className={styles["footer"]}>
        <section className={styles["copyright"]}>
          &copy; {new Date().getFullYear()} {socialInfo.fullName}
        </section>
        <SocialSection />
      </footer>
    </>
  );
};
