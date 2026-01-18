import {
  HeroSection,
  DynamicNavigator,
  ExperienceList,
  FeaturedProjects,
  type TabConfig,
} from "@/components";
import { workList, educationList, projectsInfo } from "@/data";

const appTabs: TabConfig[] = [
  {
    id: "work",
    label: "Work",
    component: () => <ExperienceList items={workList} />,
  },
  {
    id: "education",
    label: "Education",
    component: () => <ExperienceList items={educationList} />,
  },
];

export const Home = () => {
  return (
    <>
      <HeroSection />
      <DynamicNavigator tabs={appTabs} />
      <FeaturedProjects projects={projectsInfo} />
    </>
  );
};
