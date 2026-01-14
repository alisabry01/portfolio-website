import styles from "./hero-section.module.css";
import { MdWavingHand } from "react-icons/md";
import { GiEgypt } from "react-icons/gi";
import { ResumeBtn, SocialSection } from "@/components";

export const HeroSection = () => {
  const getAge = (birthDate: string): number =>
    Math.floor(
      (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10
    );

  return (
    <section className={styles["section"]}>
      <div>
        <h1>
          Hi, I'm Ammar{" "}
          <span>
            <MdWavingHand />
          </span>
        </h1>
        <p>
          {getAge("2002-02-26")}yo software engineer from Dumyat, Egypt{" "}
          <span>
            <GiEgypt />
          </span>
        </p>
        <p>
          Frontend by profession, full-stack by passion.
          <br />
          Interested in web engineering.
        </p>
        <section className={styles["external-links"]}>
          <ResumeBtn />
          <SocialSection />
        </section>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/133518349?v=4"
        className={styles["avatar"]}
        alt="Portfolio Picture"
      />
    </section>
  );
};
