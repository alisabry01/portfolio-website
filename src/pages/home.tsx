import {
  HeroSection,
  DynamicNavigator,
  type TabConfig,
} from "@/components";

const WorkComponent = () => <p>This is the work history content.</p>;
const EducationComponent = () => (
  <p>This is the education history content.</p>
);

const appTabs: TabConfig[] = [
  { id: "work", label: "Work", component: WorkComponent },
  { id: "education", label: "Education", component: EducationComponent },
];

export const Home = () => {
  return (
    <>
      <HeroSection />
      <DynamicNavigator tabs={appTabs} />
    </>
  );
};
