"use client";

import Image from "next/image";
import { memo } from "react";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  thumbnail?: string;
  liveLink?: string;
  githubLink?: string;
}

const ProjectCardComponent = ({
  title,
  description,
  technologies,
  thumbnail,
  liveLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-card",
        "transition-all duration-300",
        "shadow-sm hover:shadow-lg hover:shadow-fuchsia-400/30",
        "hover:border-indigo-400",
      )}
    >
      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative h-44 md:h-48 lg:h-52 w-full overflow-hidden bg-muted">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
            {title}
            <ArrowUpRight className="w-4 h-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4">
          {liveLink && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1 cursor-pointer"
            >
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}

          {githubLink && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 cursor-pointer"
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = memo(ProjectCardComponent);
