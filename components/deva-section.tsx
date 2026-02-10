import { Gamepad2, Users, Trophy, Palette } from "lucide-react";

const stats = [
  { icon: Users, label: "Miembros", value: "50+" },
  { icon: Gamepad2, label: "Proyectos", value: "4+" },
  { icon: Trophy, label: "Eventos", value: "4+" },
  { icon: Palette, label: "Disciplinas", value: "7" },
];

export function DevaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex flex-col lg:flex-row">
            {/* Content */}
            <div className="flex-1 p-8 lg:p-12">
              <p className="mb-2 font-mono text-sm text-primary">
                Organizacion
              </p>
              <h2 className="text-3xl font-bold text-card-foreground">DEVA</h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Desarrolladores Estudiantiles de Videojuegos y Arte
              </p>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                Como presidente de DEVA, lidero una comunidad apasionada de
                estudiantes que exploran el desarrollo de videojuegos, arte
                digital, musica y narrativa interactiva. Organizamos talleres,
                game jams y eventos que conectan la creatividad con la
                tecnologia.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                    <p className="text-2xl font-bold text-card-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="flex-1 p-4 lg:p-6">
              <div className="grid h-full grid-cols-2 gap-3">
                <div className="col-span-2 overflow-hidden rounded-xl bg-secondary">
                  <div className="flex aspect-video items-center justify-center">
                    <div className="text-center text-muted-foreground/40">
                      <img src="/images/principalDeva.jpg" alt="personal" />
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl bg-secondary">
                  <div className="flex aspect-square items-center justify-center">
                    <div className="text-center text-muted-foreground/40">
                      <img src="/images/Deva1.jpg" alt="personal" />
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl bg-secondary">
                  <div className="flex aspect-square items-center justify-center">
                    <div className="text-center text-muted-foreground/40">
                      <img src="/images/Deva2.jpg" alt="personal" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
