import styles from "./projects.module.css";
import { projectsInfo } from "@/data";
import { Card } from "@/components";

export const Projects = () => {
  return (
    <section className={styles["projects"]}>
      <h1>Projects</h1>
      <main>
        {projectsInfo.map((project, idx) => (
          <Card key={`${idx}-${project.title}`} info={project} />
        ))}
      </main>
    </section>
  );
};
