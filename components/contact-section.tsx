import { Mail, Github, Instagram, Gamepad2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jorshuadev",
    username: "@jorshua",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/jorshua_dev/",
    username: "@jorshua.dev",
  },
  {
    icon: Gamepad2,
    label: "Itch.io",
    href: "https://jorshuadev.itch.io/",
    username: "jorshua",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">06. Contacto</p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Hablemos
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="text-center">
          <p className="mx-auto max-w-md leading-relaxed text-muted-foreground">
            Si quieres hablar sobre un proyecto, una colaboracion o simplemente
            saludar, no dudes en contactarme. Estoy siempre abierto a nuevas
            oportunidades.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:jorshua.dev@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Enviar un correo
            </a>
          </Button>

          {/* Social links */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium text-card-foreground">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {link.username}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
