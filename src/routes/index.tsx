import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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

type Photo = { src: string; alt: string };
type Section = {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
};

const sections: Section[] = [
  {
    id: "habitaciones",
    title: "Habitaciones",
    description:
      "Espacios para descansar con buena ventilación, ideales para el clima cálido del municipio.",
    photos: [],
  },
  {
    id: "sala",
    title: "Sala",
    description: "Zona social acogedora para compartir en familia o con amigos.",
    photos: [],
  },
  {
    id: "cocina",
    title: "Cocina",
    description: "Cocina funcional y equipada para preparar comidas con comodidad.",
    photos: [],
  },
  {
    id: "banos",
    title: "Baños",
    description: "Baños limpios y bien iluminados.",
    photos: [],
  },
  {
    id: "zonas-comunes",
    title: "Zonas comunes",
    description:
      "Piscina principal, toboganes, parque acuático infantil y amplias áreas sociales del conjunto.",
    photos: [],
  },
];

function SectionGallery({ photos }: { photos: Photo[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  if (photos.length === 0) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-md border border-dashed border-border/60 bg-muted/40 text-xs uppercase tracking-widest text-muted-foreground">
        Fotos por agregar
      </div>
    );
  }

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const handler = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handler);
    return () => {
      api.off("select", handler);
    };
  }, [api]);

  return (
    <div className="px-10 sm:px-12">
      <Carousel setApi={setApi} opts={{ loop: photos.length > 1 }}>
        <CarouselContent>
          {photos.map((photo, i) => (
            <CarouselItem key={i}>
              <figure className="overflow-hidden rounded-md border border-border/60 bg-card shadow-sm">
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-4 py-3 text-xs text-muted-foreground">
                  <span>{photo.alt}</span>
                  <span className="tabular-nums">
                    {i + 1} / {photos.length}
                  </span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        {photos.length > 1 && (
          <>
            <CarouselPrevious className="left-0 sm:-left-2" />
            <CarouselNext className="right-0 sm:-right-2" />
          </>
        )}
      </Carousel>
      {photos.length > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la foto ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" />
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm">
          <span className="font-medium tracking-wide text-primary">
            Apartamento · Santa Fe de Antioquia
          </span>
          <ul className="hidden gap-6 text-muted-foreground sm:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="transition-colors hover:text-primary">
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
            Información y fotografías del apartamento en Santa Fe de Antioquia,
            una de las villas coloniales más antiguas y bellas del país.
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

            <SectionGallery photos={section.photos} />
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
