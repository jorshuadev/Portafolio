import { Code2, Briefcase, Users, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Fullstack",
    description:
      "Experiencia construyendo aplicaciones web completas con frontend y backend.",
  },
  {
    icon: Briefcase,
    title: "Experiencia en ERP",
    description: "Trabajo como Fullstack Junior en un sistema ERP empresarial.",
  },
  {
    icon: Users,
    title: "Liderazgo en DEVA",
    description:
      "Presidente de la agrupacion de desarrolladores de videojuegos y arte.",
  },
  {
    icon: GraduationCap,
    title: "Ing. en Software",
    description:
      "Estudiante activo de ingenieria en software, siempre aprendiendo.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">01. Sobre mi</p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Conoce un poco sobre mi
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row">
          {/* Text */}
          <div className="flex-1">
            <p className="leading-relaxed text-muted-foreground lg:text-lg">
              Soy un desarrollador fullstack apasionado por crear soluciones
              tecnologicas que generen impacto. Actualmente estudio ingenieria
              en software mientras trabajo en proyectos reales que van desde
              sistemas empresariales hasta videojuegos.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground lg:text-lg">
              Me motiva el aprendizaje continuo y la colaboracion en equipo.
              Como presidente de DEVA, lidero un grupo de estudiantes enfocados
              en el desarrollo de videojuegos y expresion artistica digital,
              combinando creatividad con habilidades tecnicas.
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="mx-auto w-full max-w-sm flex-shrink-0 lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border-2 border-border bg-secondary">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <img src="/images/Personal.jpg" alt="personal" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
