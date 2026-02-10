import { Github, Instagram, Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-foreground">
            Jorshua<span className="text-primary">.dev</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Diseñado y desarrollado con Next.js
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/jorshuadev"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/jorshua_dev/"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://jorshuadev.itch.io/"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Itch.io"
          >
            <Gamepad2 className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Jorshua Jimenez. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
