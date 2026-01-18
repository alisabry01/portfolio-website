import styles from "./social-section.module.css";
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import { socialInfo } from "@/data";

export const SocialSection = () => {
  return (
    <section className={styles["social-section"]}>
      <a
        href={socialInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <LuLinkedin />
      </a>
      <a
        href={socialInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <LuGithub />
      </a>
      <a
        href={`mailto:${socialInfo.email}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Gmail"
      >
        <LuMail />
      </a>
    </section>
  );
};
