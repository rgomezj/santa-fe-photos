import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apartamento en Santa Fe de Antioquia" },
      {
        name: "description",
        content:
          "Apartamento en Santa Fe de Antioquia, Colombia. Fotos e información de habitaciones, sala, cocina, baños y zonas comunes.",
      },
      { property: "og:title", content: "Apartamento en Santa Fe de Antioquia" },
      {
        property: "og:description",
        content:
          "Fotos e información del apartamento: habitaciones, sala, cocina, baños y zonas comunes.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Lora:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

type Section = {
  id: string;
  title: string;
  description: string;
  // Reemplaza estas URLs con las fotos reales cuando las proporciones.
  photos: { src: string; alt: string }[];
};

const sections: Section[] = [
  {
    id: "habitaciones",
    title: "Habitaciones",
    description:
      "Espacios para descansar con buena ventilación, ideales para el clima cálido del municipio.",
    photos: [
      { src: "", alt: "Habitación principal" },
      { src: "", alt: "Habitación secundaria" },
      { src: "", alt: "Detalle de habitación" },
    ],
  },
  {
    id: "sala",
    title: "Sala",
    description: "Zona social acogedora para compartir en familia o con amigos.",
    photos: [
      { src: "", alt: "Vista general de la sala" },
      { src: "", alt: "Detalle de la sala" },
    ],
  },
  {
    id: "cocina",
    title: "Cocina",
    description: "Cocina funcional y equipada para preparar comidas con comodidad.",
    photos: [
      { src: "", alt: "Vista de la cocina" },
      { src: "", alt: "Detalle de la cocina" },
    ],
  },
  {
    id: "banos",
    title: "Baños",
    description: "Baños limpios y bien iluminados.",
    photos: [
      { src: "", alt: "Baño principal" },
      { src: "", alt: "Baño secundario" },
    ],
  },
  {
    id: "zonas-comunes",
    title: "Zonas comunes",
    description:
      "Áreas compartidas del conjunto: piscina, BBQ, jardines y demás zonas sociales.",
    photos: [
      { src: "", alt: "Zona de piscina" },
      { src: "", alt: "Jardines" },
      { src: "", alt: "Zona social" },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" />
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm">
          <span className="font-medium tracking-wide text-primary">
            Apartamento · Santa Fe de Antioquia
          </span>
          <ul className="hidden gap-6 text-muted-foreground sm:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="transition-colors hover:text-primary"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent-foreground/70">
            Antioquia · Colombia
          </p>
          <h1 className="text-4xl font-medium leading-tight text-foreground sm:text-6xl">
            Un apartamento entre calles
            <br />
            empedradas y casas blancas.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Información y fotografías del apartamento en el corazón de Santa Fe de
            Antioquia, una de las villas coloniales más antiguas y bellas del país.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20">
        {sections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={idx === 0 ? "scroll-mt-24" : "mt-24 scroll-mt-24"}
          >
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-border/60 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-3xl font-medium sm:text-4xl">
                  {section.title}
                </h2>
              </div>
              <p className="hidden max-w-md text-sm text-muted-foreground sm:block">
                {section.description}
              </p>
            </div>
            <p className="mb-6 text-sm text-muted-foreground sm:hidden">
              {section.description}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.photos.map((photo, i) => (
                <figure
                  key={i}
                  className="group overflow-hidden rounded-md border border-border/60 bg-card shadow-sm"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-widest text-muted-foreground">
                        Foto pendiente
                      </div>
                    )}
                  </div>
                  <figcaption className="px-4 py-3 text-xs text-muted-foreground">
                    {photo.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center text-xs text-muted-foreground">
          Santa Fe de Antioquia · Colombia
        </div>
      </footer>
    </div>
  );
}
