import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Lahore, PK",
    description:
      "Lorem Ipsum is Lorem Ipsum, Lorem Ipsum is Lorem Ipsum,Lorem Ipsum is Lorem Ipsum",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Technovier",
    description:
      "Lorem Ipsum is Lorem Ipsum, Lorem Ipsum is Lorem Ipsum,Lorem Ipsum is Lorem Ipsum",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Ricult",
    description:
      "Lorem Ipsum is Lorem Ipsum,Lorem Ipsum is Lorem Ipsum,Lorem Ipsum is Lorem Ipsum",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Pak Group",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    tags: [
      "React",
      "Firebase",
      "Tailwind",
      "Prisma",
      "TypeScript",
      "Redux",
      "Ant design",
      "chart.js",
      "react-calendar",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Workfluxe",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    tags: [
      "React",
      "Material ui",
      "TypeScript",
      "Tailwind",
      "Redux",
      "React-beautiful-dnd",
      "Firebase",
      "draft-js",
      "Framer Motion",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ricult Farmer App",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Ricult Agent App",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Ricultx",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
