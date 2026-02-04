import { ProjectCard } from "./ProjectCards";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  thumbnail?: string;
  liveLink?: string;
  githubLink?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Chat-App Platform",
      description:
        "A full-featured Real-time Messaging • Groups • Typing Indicators • Online Users",
      technologies: ["React", "Socket IO","Express", "MongoDb", "Node"],
      thumbnail: "",
      liveLink: "https://chat-stream-ni9r.onrender.com/",
      githubLink: "https://github.com/AdityaG1912/ChatApplication",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "React Query"],
      thumbnail: "",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard with interactive charts, real-time metrics, and custom reporting capabilities.",
      technologies: [
        "Next.js",
        "Chart.js",
        "Recharts",
        "PostgreSQL",
        "TypeScript",
      ],
      thumbnail: "",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media App",
      description:
        "Full-stack social media platform with user authentication, posts, comments, and real-time notifications.",
      technologies: [
        "Next.js",
        "Prisma",
        "Socket.io",
        "PostgreSQL",
        "NextAuth.js",
      ],
      thumbnail: "",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-white md:text-5xl text-center font-bold mb-12 text-pretty">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              thumbnail={`${project.thumbnail === "" ? "/fallback.jpg" : project.thumbnail}`}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
