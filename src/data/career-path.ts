import type { ExperienceBlock } from "@/components";
import { LuGithub } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";

export const workList: ExperienceBlock[] = [
  {
    id: "Egyptian Armed Forces",
    organization: {
      name: "Egyptian Armed Forces | Operations & Training Office",
      image:
        "https://upload.wikimedia.org/wikipedia/ar/f/fd/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-%D9%84%D9%84%D9%82%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D8%AD%D8%A9.jpg",
    },
    careerPath: [
      {
        jobTitle: "IT Operations Manager (Previously IT Support Intern)",
        dates: {
          from: "Jan 2025",
          to: "Dec 2025",
        },
        achievements: [
          "Designed and implemented a custom MS Access database to streamline the storage and retrieval of official faxes from the Engineering Division, significantly improving office response times and data accessibility.",
          "Configured and maintained a local office network, ensuring reliable connectivity and data sharing between devices.",
          "Standardized the file systems and directory structures across office workstations to ensure 100% compliance with Brigade operational requirements.",
          "Managed daily administrative workflows, including the coordination of high-priority communications (faxes) and the preparation of technical training materials for personnel.",
          "Promoted from an initial 6-month internship to a managerial role for the final 6 months, overseeing critical office duties and IT infrastructure.",
        ],
      },
    ],
    links: [
      {
        label: "Certificate",
        url: "https://drive.google.com/file/d/1Vr1Oi7ZOqMnjGQMfH7gEAtereB0DftT0/view?usp=sharing",
        Icon: PiCertificate,
      },
    ],
  },
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
    links: [
      {
        label: "Simple Unix Shell",
        url: "https://github.com/ammarelbadry1/simple_shell",
        Icon: LuGithub,
      },
      {
        label: "AirBnB Clone",
        url: "https://github.com/ammarelbadry1/AirBnB_clone",
        Icon: LuGithub,
      },
      {
        label: "Raqeeb",
        url: "https://github.com/raqeeb-0/raqeeb-web",
        Icon: LuGithub,
      },
      {
        label: "Certificate",
        url: "https://drive.google.com/file/d/1TqJQ9eUrIZRtk_chYKRmFxDLFJAstfDX/view?usp=sharing",
        Icon: PiCertificate,
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
      {
        label: "Graduation Certificate",
        url: "https://drive.google.com/file/d/1nE_8EsEHxuuajB1zdWJdOCoJVCnP-8c1/view?usp=sharing",
        Icon: PiCertificate,
      },
    ],
  },
];
