import type { ProjectInfo } from "@/components";
import { LuGithub } from "react-icons/lu";

export const projectsInfo: ProjectInfo[] = [
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
