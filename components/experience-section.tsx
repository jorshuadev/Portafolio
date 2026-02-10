import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2023 - Presente",
    title: "Estudiante de Ing. en Software",
    company: "Universidad",
    description:
      "Formacion academica en ingenieria de software, participando en proyectos de desarrollo web, algoritmos y estructuras de datos.",
    tags: ["Python", "JavaScript", "Algoritmos", "POO"],
  },
  {
    period: "2025 - 5 Meses",
    title: "Fullstack Developer Junior",
    company: "ERP Empresarial",
    description:
      "Desarrollo de modulos completos para un sistema ERP, trabajando tanto en el frontend con React como en el backend con Laravel. Integracion de APIs y bases de datos.",
    tags: ["Laravel", "React", "SQL", "REST API"],
  },
  {
    period: "2025 - Presente",
    title: "Presidente de DEVA",
    company: "Agrupacion de Desarrolladores de Videojuegos y Arte",
    description:
      "Liderando un equipo de estudiantes enfocados en el desarrollo de videojuegos, arte digital y proyectos creativos. Coordinacion de eventos, talleres y colaboraciones.",
    tags: ["Unity", "Liderazgo", "Game Dev", "Arte Digital"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">03. Experiencia</p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Mi trayectoria
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                    <span className="font-mono text-xs text-primary">
                      {exp.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-card-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2 md:block" />

                {/* Empty space for alignment */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
