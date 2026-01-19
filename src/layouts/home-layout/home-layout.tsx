import clsx from "clsx";
import styles from "./home-layout.module.css";
import { Outlet, Link, NavLink } from "react-router";
import { useScrollOffset } from "@/hooks";
import { SocialSection } from "@/components";

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
  const { isScrolled } = useScrollOffset(50);
  return (
    <>
      <header
        className={clsx([styles["header"], isScrolled && styles["glass"]])}
      >
        <nav className={styles["nav"]}>
          <ul className={styles["ul"]}>
            {navigationLinks.map((link) => (
              <li>
                <NavLink
                  to={link.path}
                  key={link.label}
                  className={({ isActive }) =>
                    isActive ? styles["active"] : ""
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/">
            <img src="/logo-32x32.png" width="32px" height="32px" />
          </Link>
        </nav>
      </header>
      <main className={styles["main"]}>
        <article className={styles["article"]}>
          <Outlet />
        </article>
      </main>
      <footer className={styles["footer"]}>
        <section className={styles["copyright"]}>
          &copy; {new Date().getFullYear()} Ammar El-Badry
        </section>
        <SocialSection />
      </footer>
    </>
  );
};
