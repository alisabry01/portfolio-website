import clsx from "clsx";
import styles from "./home-layout.module.css";
import { Outlet, Link } from "react-router";
import { useScrollOffset } from "@/hooks";
import { SocialSection } from "@/components";

export const HomeLayout = () => {
  const { isScrolled } = useScrollOffset(50);
  return (
    <>
      <header
        className={clsx([styles["header"], isScrolled && styles["glass"]])}
      >
        <nav className={styles["nav"]}>
          <ul className={styles["ul"]}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
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
        <section>copyright</section>
        <SocialSection />
      </footer>
    </>
  );
};
