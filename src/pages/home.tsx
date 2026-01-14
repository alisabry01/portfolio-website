import {
  HeroSection,
  DynamicNavigator,
  ExperienceList,
  type TabConfig,
  type ExperienceBlock,
} from "@/components";

const workList: ExperienceBlock[] = [
  {
    id: "Alx Africa",
    organization: {
      name: "Alx Africa",
      imageUrl:
        "https://yt3.googleusercontent.com/srNcxOdrRGd7xlsTaD9ap4tDxvWhKcUWec5RFjiW5KNADLin-cm6Fyullvzpip7Ha2f_Ga_M=s160-c-k-c0x00ffffff-no-rj",
      orgUrl: "https://www.alxafrica.com/",
    },
    careerPath: [
      {
        jobTitle: "Intern Software Engineer",
        dates: {
          from: "Jun 2023",
          to: "Jul 2024",
        },
        achievements: [
          "Engineered a custom Unix-like shell and printf function in C, implementing advanced memory management and process handling to solve complex system-level problems.",
          "Developed responsive web applications using React and ES6+, ensuring high performance and cross-browser compatibility across mobile and desktop devices.",
          "Automated deployment workflows using Shell scripts and CI/CD tools, reducing manual environment setup time.",
        ],
      },
    ],
  },
];

const educationList: ExperienceBlock[] = [
  {
    id: "Damietta University",
    organization: {
      name: "Damietta University",
      imageUrl: "https://www.du.edu.eg/assets/images/logo.png",
    },
    careerPath: [
      {
        jobTitle: "Bachelor of Computer Science - GPA: 3.24",
        dates: {
          from: "Sep 2020",
          to: "Jun 2024",
        },
        achievements: [
          "Graduated with a Minor in IT.",
          "Relevant Coursework: Data Structures, Algorithms, Web Development, Artificial Intelligence, and Software Engineering.",
        ],
      },
    ],
    links: [
      {
        name: "Graduation Project",
        href: "https://github.com/Life-Nest/backend-service",
      },
      {
        name: "Machine Learning Project",
        href: "https://github.com/ammarelbadry1/machine-learning",
      },
      {
        name: "Computer Vision Notebook",
        href: "https://github.com/ammarelbadry1/computer-vision",
      },
    ],
  },
];

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
    </>
  );
};
