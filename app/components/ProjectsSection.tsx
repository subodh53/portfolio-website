import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Rejection Data Analysis",
      description: "A comprehensive data analysis platform for aluminium die casting organization with real-time rejection tracking, trend analysis, and quality control dashboards. Helps identify patterns in manufacturing defects and improve production quality.",
      tech: ["Nest.js", "React", "TypeScript", "PostgreSQL"],
      url: "https://rejection-app-frontend.vercel.app",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, experience, and skills. Built with modern web technologies featuring dark/light theme toggle and responsive design.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      url: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 animate-scale-in stagger-${index + 1}`}
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:opacity-80"
                style={{ color: 'var(--accent)' }}
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
