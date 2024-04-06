"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  CloudIcon,
  ServerIcon,
  ChartBarIcon,
  ChartPieIcon,
  DocumentTextIcon,
  
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Data Analysis",
    children:
      "Proficient in analyzing complex datasets, extracting actionable insights, and presenting findings to drive informed decision-making for business growth and optimization.",
  },
  {
    icon: ServerIcon,
    title: "Server Management",
    children:
      "Specializing in managing servers to ensure optimal performance, security, and reliability, crucial for supporting business operations and scalability.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Computing",
    children:
      "Possessing expertise in cloud computing technologies to efficiently store, process, and analyze data, enabling scalable solutions for business insights and growth.",
  },
  {
    icon: ChartBarIcon,
    title: "Statistical Analysis",
    children:
      "Proficient in conducting statistical analysis to identify meaningful trends, patterns, and correlations in data, facilitating data-driven decision-making for business optimization.",
  },
  {
    icon: ChartPieIcon,
    title: "Data Visualization",
    children:
      "Skilled in creating visually engaging data visualizations to effectively communicate insights, empowering stakeholders to comprehend complex information and drive strategic actions.",
  },
  {
    icon: DocumentTextIcon,
    title: "Documentation Management",
    children:
      "Adept in managing documentation processes, ensuring clarity, accuracy, and accessibility of information to support efficient business operations and meet compliance requirements.",
  },
];


export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
            As a business analyst, I specialize in transforming data into strategic
           insights, fostering collaboration, and driving innovation. 
           With a keen eye for optimization and a commitment to excellence, I empower decision-makers to navigate challenges and capitalize on opportunities 
          effectively. Let&apos;s work together to elevate your business to new heights.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
