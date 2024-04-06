"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  Folder,
  DocumentTextIcon,
  
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Data Analysis:",
    children:
      "I excel in analyzing complex datasets, deriving actionable insights, and presenting findings to support informed decision-making for business growth and optimization.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Critical Thinking",
    children:
      "I possess strong analytical and critical-thinking abilities, enabling me to evaluate information objectively, anticipate potential issues, and make informed decisions that drive business success.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      ".",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Requirements Gathering",
    children:
      "I am skilled in eliciting, documenting, and prioritizing business requirements through various techniques, ensuring that project deliverables align with stakeholder expectations and strategic objectives..",
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
