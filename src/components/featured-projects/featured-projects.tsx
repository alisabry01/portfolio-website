import styles from "./featured-projects.module.css";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router";
import { Card, type CardInfo } from "@/components";

export interface ProjectInfo extends CardInfo {
  featured: boolean;
}

interface FeaturedProjectsProbs {
  projects: ProjectInfo[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProbs> = ({
  projects,
}) => {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section className={styles["featured-projects"]}>
      <header>
        <h2>Featured Projects</h2>
        <Link to="/projects" className={styles["view-more"]}>
          View More{" "}
          <span>
            <LuArrowRight />
          </span>
        </Link>
      </header>
      <main>
        {featuredProjects.map((project, idx) => (
          <Card key={`${idx}-${project.title}`} info={project} />
        ))}
      </main>
    </section>
  );
};
