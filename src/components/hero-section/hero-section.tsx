import styles from "./hero-section.module.css";
import { MdWavingHand } from "react-icons/md";
import { ResumeBtn, SocialSection } from "@/components";
import { socialInfo } from "@/data";
import { getAge } from "@/utils";

export const HeroSection = () => {
  return (
    <main className={styles["hero-section"]}>
      <header className={styles["headline"]}>
        <h1>
          Hi, I'm{" "}
          <span className={styles["nowrap"]}>
            {socialInfo.firstName} <MdWavingHand />
          </span>
        </h1>
        <p>
          {getAge(socialInfo.birthDate)}yo {socialInfo.title} from{" "}
          <span className={styles["nowrap"]}>{socialInfo.country}</span>
        </p>
      </header>
      <article className={styles["description"]}>
        {socialInfo.description}
      </article>
      <div className={styles["external-links"]}>
        <ResumeBtn />
        <SocialSection />
      </div>
      <img
        src={socialInfo.picture}
        className={styles["avatar"]}
        alt="Portfolio Picture"
      />
    </main>
  );
};
