import {
  HeroSection,
  DynamicNavigator,
  ExperienceList,
  FeaturedProjects,
  type TabConfig,
  type ExperienceBlock,
  type ProjectInfo,
} from "@/components";
import { LuGithub } from "react-icons/lu";

const workList: ExperienceBlock[] = [
  {
    id: "Alx Africa",
    organization: {
      name: "Alx Africa",
      imageUrl:
        "https://www.alxafrica.com/wp-content/uploads/2023/12/logo-black.svg",
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
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/ar/3/30/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%AF%D9%85%D9%8A%D8%A7%D8%B7.gif",
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

const projectsInfo: ProjectInfo[] = [
  {
    title: "Life Nest",
    description:
      "Life Nest empowers hospitals to efficiently manage their incubators and simplify the reservation process for parents.",
    image: "https://avatars.githubusercontent.com/u/146668301",
    tags: [
      "JavaScript",
      "Express",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "Flutter",
    ],
    links: [
      {
        label: "Source",
        url: "https://github.com/Life-Nest/backend-service",
        Icon: LuGithub,
      },
      {
        label: "Source (UI)",
        url: "https://github.com/Life-Nest/mobile-app",
        Icon: LuGithub,
      },
    ],
    featured: true,
  },
  {
    title: "Raqeeb",
    description:
      "A software solution designed to streamline inventory management process. It helps keep track of materials, products, and their quantities.",
    image: "https://avatars.githubusercontent.com/u/173635414",
    tags: [
      "JavaScript",
      "Prisma",
      "Express",
      "PostgreSQL",
      "Redis",
      "React",
      "React Router v6",
    ],
    links: [
      {
        label: "Source",
        url: "https://github.com/raqeeb-0/raqeeb-api",
        Icon: LuGithub,
      },
      {
        label: "Source (UI)",
        url: "https://github.com/raqeeb-0/raqeeb-web",
        Icon: LuGithub,
      },
    ],
    featured: true,
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
