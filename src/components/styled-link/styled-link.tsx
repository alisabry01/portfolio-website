import type { ElementType } from "react";
import styles from "./styled-link.module.css";

interface StyledLinkProps {
  children: React.ReactNode;
  href: string;
  Icon: ElementType;
}

export const StyledLink: React.FC<StyledLinkProps> = ({
  children,
  href,
  Icon,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="no referrer"
      className={styles["styled-link"]}
    >
      <span>
        <Icon />
      </span>
      {children}
    </a>
  );
};
