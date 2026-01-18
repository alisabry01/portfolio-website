import styles from "./resume-btn.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import { socialInfo } from "@/data";

export const ResumeBtn = () => {
  return (
    <a
      href={socialInfo.resume}
      target="_blank"
      className={styles["resume-btn"]}
    >
      Resume{" "}
      <span>
        <LuArrowUpRight />
      </span>
    </a>
  );
};
