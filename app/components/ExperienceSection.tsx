import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Software Developer",
      company: "OnPoint Nexus Private Limited",
      period: "February 2026 - Present",
      description: "Currently working as a Full Stack Software Developer, building scalable web applications and contributing to various projects.",
    },
    {
      role: "Software Developer 1",
      company: "People Prudent Consulting and HR Solutions Private Limited",
      period: "August 2024 - February 2026",
      description: "Worked as a full-time Software Developer, developing and maintaining software solutions.",
    },
    {
      role: "IT and Software Intern",
      company: "People Prudent Consulting and HR Solutions Private Limited",
      period: "August 2024 - February 2026",
      description: "Started as an intern, learning software development practices and contributing to real-world projects.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5" style={{ backgroundColor: 'var(--card-border)' }}></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-in-left stagger-${index + 1}`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4" style={{ borderColor: 'var(--background)' }}></div>
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:text-right md:pr-12" : "md:ml-auto md:text-left md:pl-12"} flex-1`}>
                  <div className="rounded-lg p-6 shadow-lg border hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                    <div className="flex items-center gap-2 mb-2 md:justify-start md:md:justify-start">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>
                    <p className="font-medium mb-2" style={{ color: 'var(--accent)' }}>
                      {exp.company}
                    </p>
                    <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {exp.period}
                    </p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
