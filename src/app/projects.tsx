"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/car-crash.jpg",
    title: "Predicting  Injury Severity  of Occupants in Automobile Crashes",
    desc: " a comprehensive analysis of the factors influencing injury severity in vehicle crashes, with a focus on contrasting rural and urban environments in Pennsylvania. The study is driven by the need to understand the nuanced dynamics of motor vehicle crashes and their consequences on occupants, aiming to contribute to more effective road safety strategies and policies..",
  },
  {
    img: "/image/cargoship-FA.jpg",
    title: "Data-Driven Ship Valuation in the Maritime Market",
    desc: " harnessed Horizon Inc.'s market analysis, drawing from 48 sales transactions spanning January 2007 to May 2008, sourced from the Compass Weekly Market Report. This data formed the backbone of our efforts to ascertain the value of Bet Performer. Leveraging regression modeling techniques, we pinpointed pivotal predictors for ship price, empowering strategic decision-making within the maritime sector.",
  },
  {
    img: "/image/download-_3_.jpg",
    title: "Amazon warehouse",
    desc: "In our project to implement a process flow in an Amazon warehouse, we focused on efficiently receiving, sorting, and storing goods. Utilizing inventory management systems, we meticulously tracked stock levels, ensuring accuracy throughout the warehouse. Our picking and packing operations were streamlined to fulfill orders with precision. Seamless shipping and dispatch procedures were established to guarantee timely delivery, while we also prioritized returns processing and continuous optimization efforts. Above all, we emphasized safety and compliance throughout all operations to maintain a secure working environment.",
  },

];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether your  a small business that needs to understand the market and what works for your company 
          or your a large business that need to analyze your customer data in oder to make informed choices , I&apos;m here to help make that happen.
      .
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
