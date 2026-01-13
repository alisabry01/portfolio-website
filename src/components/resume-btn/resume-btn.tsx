import styles from "./resume-btn.module.css";
import { LuArrowUpRight } from "react-icons/lu";

export const ResumeBtn = () => {
  return (
    <a
      href="https://docs.google.com/document/d/1ldqHQQedi_MnLRyHJcVgIbqXQyNxB2wqNLcbkqKqmlU/edit?usp=sharing"
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
