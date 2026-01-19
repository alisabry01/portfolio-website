import styles from "./hero-section.module.css";
import { MdWavingHand } from "react-icons/md";
import { ResumeBtn, SocialSection } from "@/components";
import { socialInfo } from "@/data";

export const HeroSection = () => {
  const getAge = (birthDate: string): number =>
    Math.floor(
      (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10,
    );

  return (
    <main className={styles["hero-section"]}>
      <article>
        <h1>
          Hi, I'm {socialInfo.name}{" "}
          <span>
            <MdWavingHand />
          </span>
        </h1>
        <p>
          {getAge(socialInfo.birthDate)}yo {socialInfo.title} from{" "}
          {socialInfo.country}
        </p>
        <p>{socialInfo.description}</p>
        <div className={styles["external-links"]}>
          <ResumeBtn />
          <SocialSection />
        </div>
      </article>
      <img
        src={socialInfo.picture}
        className={styles["avatar"]}
        alt="Portfolio Picture"
      />
    </main>
  );
};
