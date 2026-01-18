import type { ElementType } from "react";
import styles from "./styled-link.module.css";
import { LuGlobe } from "react-icons/lu";

interface StyledLinkProps {
  label: string;
  url: string;
  Icon?: ElementType;
}

export const StyledLink: React.FC<StyledLinkProps> = ({
  label,
  url,
  Icon,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="no referrer"
      className={styles["styled-link"]}
    >
      <span>{Icon ? <Icon /> : <LuGlobe />}</span>
      {label}
    </a>
  );
};
