import type { ExperienceBlock } from "@/components";
import { LuGithub } from "react-icons/lu";

export const workList: ExperienceBlock[] = [
  {
    id: "Alx Africa",
    organization: {
      name: "Alx Africa",
      image:
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

export const educationList: ExperienceBlock[] = [
  {
    id: "Damietta University",
    organization: {
      name: "Damietta University",
      image:
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
        label: "Graduation Project",
        url: "https://github.com/Life-Nest/backend-service",
        Icon: LuGithub,
      },
      {
        label: "Machine Learning Project",
        url: "https://github.com/ammarelbadry1/machine-learning",
        Icon: LuGithub,
      },
      {
        label: "Computer Vision Notebook",
        url: "https://github.com/ammarelbadry1/computer-vision",
        Icon: LuGithub,
      },
    ],
  },
];
