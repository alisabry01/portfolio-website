import type { ProjectInfo } from "@/components";
import { LuGithub } from "react-icons/lu";

export const projectsInfo: ProjectInfo[] = [
  {
    title: "Life Nest",
    description:
      "Life Nest empowers hospitals to efficiently manage their incubators and simplify the reservation process for parents.",
    image: "/incubator.webp",
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
    image: "/inventory-management-system.webp",
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
  {
    title: "Simple Shell",
    description:
      "A simple UNIX command line interpreter provides basic functionality for users to interact with their system through a command-line interface.",
    image: "/unix-shell.webp",
    tags: [
      "C Programming Language",
      "String Manipulation",
      "Memory Management",
    ],
    links: [
      {
        label: "Source",
        url: "https://github.com/ammarelbadry1/simple_shell",
        Icon: LuGithub,
      },
    ],
    featured: false,
  },
  {
    title: "Holbertonbnb",
    description:
      "A clone of the popular vacation rental website, Airbnb, aims to replicate the core functionality of the original website.",
    image: "/holberton-bnb.webp",
    tags: [
      "Python",
      "OOP",
      "HTML",
      "CSS",
      "Shell Scripting",
      "Unit Testing",
    ],
    links: [
      {
        label: "Source",
        url: "https://github.com/ammarelbadry1/AirBnB_clone",
        Icon: LuGithub,
      },
    ],
    featured: false,
  },
];
