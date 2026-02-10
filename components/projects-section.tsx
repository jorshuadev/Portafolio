import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ERP Fullstack",
    description:
      "Sistema de planificacion de recursos empresariales completo, con modulos de inventario, facturacion y reportes. Desarrollado con Laravel y React.",
    tags: ["Laravel", "React", "MySQL", "REST API"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Puente entre edificios U",
    description:
      "Proyecto universitario de diseño y modelado de un puente estructural entre edificios, aplicando principios de ingenieria y tecnologia.",
    tags: ["Blender", "Modelado 3D", "Ingenieria"],
    image: null,
    github: "#",
    live: null,
    featured: true,
  },
  {
    title: "Apps con Python",
    description:
      "Coleccion de aplicaciones desarrolladas en Python, incluyendo automatizaciones, scripts de analisis de datos y herramientas CLI.",
    tags: ["Python", "IA", "Automatizacion"],
    image: "/images/ALM.jpeg",
    github: "https://github.com/jorshuadev/Android-Link-Manager",
    live: null,
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">04. Proyectos</p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Trabajo destacado
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="text-xs text-muted-foreground">Sin imagen</p>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-foreground/60 opacity-0 transition-opacity group-hover:opacity-100">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:scale-110"
                      aria-label={`GitHub - ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:scale-110"
                      aria-label={`Ver en vivo - ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* More projects */}
          <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border p-12 transition-colors hover:border-primary/30">
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground">
                Mas proyectos pronto
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Estoy trabajando en nuevos proyectos
              </p>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <a href="#contacto">Contactar para colaborar</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
