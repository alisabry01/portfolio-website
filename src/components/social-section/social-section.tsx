import styles from "./social-section.module.css";
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";

export const SocialSection = () => {
  return (
    <section className={styles["social-section"]}>
      <a
        href="https://www.linkedin.com/in/ammarelbadry1"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <LuLinkedin />
      </a>
      <a
        href="https://github.com/ammarelbadry1"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <LuGithub />
      </a>
      <a
        href="mailto:ammarelbadry1@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Gmail"
      >
        <LuMail />
      </a>
    </section>
  );
};
