import styles from "./card.module.css";
import { StyledLink } from "@/components";
import type { ElementType } from "react";

interface Link {
  label: string;
  url: string;
  Icon?: ElementType;
}

export interface CardInfo {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: Link[];
}

interface CardProps {
  info: CardInfo;
}

export const Card: React.FC<CardProps> = ({ info }) => {
  return (
    <article className={styles["card"]}>
      <img
        src={info.image}
        alt={info.title}
        className={styles["card-cover"]}
      />
      <div className={styles["card-header"]}>
        <h3>{info.title}</h3>
        <p>{info.description}</p>
      </div>
      <div className={styles["lists-container"]}>
        <div className={styles["tag-list"]}>
          {info.tags.map((tag, idx) => (
            <div key={`${idx}-${tag}`} className={styles["tag"]}>
              {tag}
            </div>
          ))}
        </div>
        <div className={styles["link-list"]}>
          {info.links.map((link, idx) => (
            <StyledLink
              key={`${idx}-${link.label}`}
              label={link.label}
              url={link.url}
              Icon={link.Icon}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
