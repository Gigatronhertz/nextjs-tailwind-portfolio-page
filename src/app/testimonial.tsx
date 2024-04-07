"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


const testimonials = [
  {
    text: "  I had the pleasure of working with Daniel on a business analytics project, and I can confidently say that their expertise and professionalism exceeded my expectations.",
    author: "Michael Chen",
    position: "CEO @ GT.Solutions"
  },
  {
    text: "Chinae's expertise in international trade and market analysis was instrumental in guiding our company's expansion into the Chinese market. Her insights and recommendations helped us navigate regulatory challenges and establish successful partnerships.",
    author: "Rachel",
    position: "Business Developemnt Director @ MBX"
  },
  {
    text: "I had the pleasure of working with Daniel on a business analytics project, and I can confidently say that their expertise and professionalism exceeded my expectations.",
    author: "Mark",
    position: "Manager @ ratch "
  }
];





export function Testimonial() {
  const [active, setActive] = React.useState(0);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto text-center">
        {/* Testimonial text */}
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What Clients Say
        </Typography>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="w-full lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
            <div className="container mx-auto mb-10 text-left">
              <Typography
                variant="lead"
                className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12 mb-4"
              >
                {testimonials[active].text}
              </Typography>
              <Typography variant="h3" color="blue-gray" className="mb-1">
                {testimonials[active].author}
              </Typography>
              <Typography variant="h3" color="gray">
                {testimonials[active].position}
              </Typography>
            </div>
            {/* Avatar selection */}
            <div className="flex items-center gap-4 justify-center lg:text-left ">
              {testimonials.map((testimonial, index) => (
                <Avatar
                  key={index}
                  variant="rounded"
                  src={`/image/avatar${index + 1}.jpeg`}
                  alt={`Avatar ${index + 1}`}
                  size="sm"
                  className={`cursor-pointer ${
                    active === index ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Testimonial image */}
            <div className="h-[21rem] rounded-lg lg:w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active + 1}.jpeg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
