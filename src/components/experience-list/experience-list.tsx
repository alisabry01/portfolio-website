import styles from "./experience-list.module.css";
import type { ElementType } from "react";
import { StyledLink } from "@/components";

interface CareerPathItem {
  jobTitle: string;
  dates: {
    from: string;
    to: string;
  };
  achievements: string[];
}

interface Link {
  label: string;
  url: string;
  Icon?: ElementType;
}

export interface ExperienceBlock {
  id: string;
  organization: {
    name: string;
    image: string;
    orgUrl?: string;
  };
  careerPath: CareerPathItem[];
  links?: Link[];
}

interface ExperienceListProps {
  items: ExperienceBlock[];
}

export const ExperienceList: React.FC<ExperienceListProps> = ({
  items,
}) => {
  return (
    <ul className={styles["experience-list"]}>
      {items.map((item) => (
        <li key={item.id} className={styles["experience-list-item"]}>
          {item.organization.orgUrl ? (
            <header className={styles["org-header"]}>
              <a
                href={item.organization.orgUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={item.organization.image}
                  className={styles["org-image"]}
                  alt={`${item.organization.name} logo`}
                  loading="lazy"
                />
              </a>
              <a
                href={item.organization.orgUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2>{item.organization.name}</h2>
              </a>
            </header>
          ) : (
            <header className={styles["org-header"]}>
              <img
                src={item.organization.image}
                className={styles["org-image"]}
                alt={`${item.organization.name} logo`}
                loading="lazy"
              />
              <h2>{item.organization.name}</h2>
            </header>
          )}

          <div>
            {item.careerPath.map((path, idx) => (
              <article
                key={`${item.id}-path-${idx}`}
                className={styles["career-path-item"]}
              >
                <div>
                  <h3>{path.jobTitle}</h3>
                  <time>
                    <span>{path.dates.from}</span> -{" "}
                    <span>{path.dates.to}</span>
                  </time>
                </div>
                <ul>
                  {path.achievements.map((achievement, idx) => (
                    <li key={`${item.id}-achievement-${idx}`}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {item.links && item.links.length > 0 && (
            <footer className={styles["link-list"]}>
              {item.links.map((link) => (
                <StyledLink
                  key={link.label}
                  label={link.label}
                  url={link.url}
                  Icon={link.Icon}
                />
              ))}
            </footer>
          )}
        </li>
      ))}
    </ul>
  );
};
