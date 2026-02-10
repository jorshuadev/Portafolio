"use client";

import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "React", level: 30, category: "Frontend" },
  { name: "TypeScript", level: 50, category: "Frontend" },
  { name: "PHP", level: 60, category: "Backend" },
  { name: "Laravel", level: 65, category: "Backend" },
  { name: "Python", level: 71, category: "Backend" },
  { name: "SQL", level: 65, category: "Backend" },
];

const toolCategories = [
  {
    title: "Frontend",
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    tools: ["PHP", "Laravel", "Python", "Node.js", "SQL", "REST APIs"],
  },
  {
    title: "Herramientas",
    tools: ["Git", "GitHub", "VS Code", "Figma", "Unity", "Linux"],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="habilidades"
      className="bg-secondary/30 py-24"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">02. Habilidades</p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Tecnologias y herramientas
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Progress bars */}
          <div className="flex-1">
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Nivel de habilidad
            </h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    value={isVisible ? skill.level : 0}
                    className="h-2 bg-secondary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tool categories */}
          <div className="flex-1">
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Stack tecnologico
            </h3>
            <div className="space-y-8">
              {toolCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
