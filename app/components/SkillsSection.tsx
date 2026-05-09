import { Code2 } from "lucide-react";

export function SkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Reactjs",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Docker",
    "Linux",
    "Azure Cloud",
    "AWS",
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          Skills
        </h2>
        <div className="rounded-lg p-8 shadow-lg border hover:-translate-y-1 transition-all duration-300 animate-scale-in" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--badge-bg)' }}>
              <Code2 className="w-6 h-6" style={{ color: 'var(--badge-text)' }} />
            </div>
            <h3 className="text-2xl font-bold">Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full transition-all duration-300 cursor-default hover:scale-110 hover:opacity-80"
                style={{ backgroundColor: 'var(--card-border)', color: 'var(--foreground)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
