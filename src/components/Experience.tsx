"use client";

import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      company: "Techademy, Pune",
      position: "Frontend Developer",
      period: "Dec 2024 – Sep 2025",
      description:
        "Built high-performance, accessible interfaces using Next.js and React, focusing on SEO, usability, and scalable CMS-driven architecture.",
      highlights: [
        "Improved Core Web Vitals, raising SEO score from 75% to 100%",
        "Integrated GraphQL CMS and Salesforce Web-to-Lead automation",
        "Boosted user engagement by 70% through UX improvements",
      ],
    },
    {
      company: "Kayadhu Software Solutions, Pune",
      position: "Software Engineer",
      period: "Apr 2024 – Nov 2024",
      description:
        "Worked as a full-stack engineer delivering secure, scalable features using the MERN stack.",
      highlights: [
        "Built REST APIs and UI flows supporting 1,000+ daily users",
        "Reduced average response time by 35%",
        "Implemented role-based access control and reusable UI patterns",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            Professional experience building scalable, high-performance web
            applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[38px] top-2 h-5 w-5 rounded-full bg-indigo-500 ring-4 ring-background" />

                {/* Card */}
                <div className="group rounded-lg border border-zinc-800 bg-card p-6 transition-all hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/10">
                  {/* Period badge */}

                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col items-start justify-start">
                      {/* Role */}
                      <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-400 mb-1 flex items-center gap-2">
                        {exp.position}
                        {/* <ArrowUpRight className="w-4 h-4 group-hover:opacity-100 opacity-0 group-hover:text-indigo-400" /> */}
                      </h3>

                      {/* Company */}
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="w-fit text-xs font-medium"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-indigo-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
