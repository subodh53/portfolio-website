import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const education = {
    degree: "BTech Computer Engineering",
    institution: "Vishwakarma Institute of Information Technology",
    period: "2021 - 2025",
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          Education
        </h2>
        <div className="rounded-lg p-8 shadow-lg border hover:-translate-y-1 transition-all duration-300 animate-slide-in-right" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--badge-bg)' }}>
              <GraduationCap className="w-6 h-6" style={{ color: 'var(--badge-text)' }} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
              <p className="font-medium mb-2" style={{ color: 'var(--accent)' }}>
                {education.institution}
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                {education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
