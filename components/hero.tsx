import { ArrowDown, Github, Instagram, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const techStack = ["React", "TypeScript", "Laravel", "Python", "SQL", "PHP"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 pt-24 pb-16 md:flex-row md:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            Disponible para trabajar
          </Badge>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hola, soy <span className="text-primary">Jorshua Jimenez</span>
          </h1>

          <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
            Fullstack Developer
          </p>

          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Estudiante de ingenieria en software con experiencia en desarrollo
            web, sistemas ERP y proyectos de videojuegos.
          </p>

          {/* Tech badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#proyectos">Ver proyectos</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contacto">Contactar</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <a
              href="https://github.com/jorshuadev"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/jorshua_dev/"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://jorshuadev.itch.io/"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Itch.io"
            >
              <Gamepad2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-border bg-secondary sm:h-80 sm:w-80">
            <img src="/images/foto.jpg" alt="Mi foto" />
            {/* Placeholder for profile image - replace src with your photo */}
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/30">
                  <span className="text-2xl font-bold text-primary">JJ</span>
                </div>
                <p className="text-xs text-muted-foreground/60">Tu foto aqui</p>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-primary/20 -z-10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/40 transition-colors hover:text-primary"
        aria-label="Scroll hacia abajo"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
