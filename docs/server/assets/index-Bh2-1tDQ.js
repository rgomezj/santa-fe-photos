import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
const __vite_glob_0_0 = "/assets/Banos-01-DQ0UxWf4.jpg";
const __vite_glob_0_1 = "/assets/Banos-2-CttR6QeA.jpg";
const __vite_glob_0_2 = "/assets/Banos-3-D6kbhxjn.jpg";
const __vite_glob_0_3 = "/assets/Banos-4-vuCjbDed.jpg";
const __vite_glob_0_4 = "/assets/Cocina-01-4TUru3Lj.jpg";
const __vite_glob_0_5 = "/assets/Cocina-02-CG_gZ0cu.jpg";
const __vite_glob_0_6 = "/assets/Cocina-03-BMwVyzuA.jpg";
const __vite_glob_0_7 = "/assets/Habitaciones-01-CxU_gRlb.jpg";
const __vite_glob_0_8 = "/assets/Habitaciones-02-C96MgXie.jpg";
const __vite_glob_0_9 = "/assets/Habitaciones-03-rsdH40XS.jpg";
const __vite_glob_0_10 = "/assets/Habitaciones-04-DBs0xY4z.jpg";
const __vite_glob_0_11 = "/assets/Habitaciones-04-DBs0xY4z.jpg";
const __vite_glob_0_12 = "/assets/Habitaciones-06-GQwmSMWr.jpg";
const __vite_glob_0_13 = "/assets/Habitaciones-07-CKZx53ti.jpg";
const __vite_glob_0_14 = "/assets/Habitaciones-08-B-rPKjkY.jpg";
const __vite_glob_0_15 = "/assets/Habitaciones-09-708SoTiM.jpg";
const __vite_glob_0_16 = "/assets/Habitaciones-10-CG33ku6l.jpg";
const __vite_glob_0_17 = "/assets/Habitaciones-11-C1FUJK3A.jpg";
const __vite_glob_0_18 = "/assets/Otros-1-B2zJkglv.jpg";
const __vite_glob_0_19 = "/assets/Sala-01-CYQkB9cW.jpg";
const __vite_glob_0_20 = "/assets/Sala-02-BT15XHJp.jpg";
const __vite_glob_0_21 = "/assets/Sala-03-0WE1vPf7.jpg";
const __vite_glob_0_22 = "/assets/Sala-04-DkKiH0xp.jpg";
const __vite_glob_0_23 = "/assets/Sala-05-BswYeFT5.jpg";
const __vite_glob_0_24 = "/assets/ZonasComunes-14-D9lEDhpm.jpg";
const __vite_glob_0_25 = "/assets/ZonasComunes-15-BJq3dngN.jpg";
const __vite_glob_0_26 = "/assets/ZonasComunes-16-DvHgETsC.jpg";
const __vite_glob_0_27 = "/assets/ZonasComunes-17-BLLxKJol.jpg";
const __vite_glob_0_28 = "/assets/ZonasComunes-18-D-H_H3XU.jpg";
const __vite_glob_0_29 = "/assets/ZonasComunes-19-koxG4911.jpg";
const __vite_glob_0_30 = "/assets/ZonasComunes-20-9fW7-g7w.jpg";
const __vite_glob_0_31 = "/assets/ZonasComunes-21-D2BhfpuA.jpg";
const __vite_glob_0_32 = "/assets/ZonasComunes-22-CsGboDEv.jpg";
const __vite_glob_0_33 = "/assets/ZonasComunes-23-CBVeNUJO.jpg";
const __vite_glob_0_34 = "/assets/ZonasComunes-24-DnnzNlzO.jpg";
const __vite_glob_0_35 = "/assets/ZonasComunes-25-BuG8v3_F.jpg";
const __vite_glob_0_36 = "/assets/ZonasComunes-7-DzhnMM7I.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const photoModules = /* @__PURE__ */ Object.assign({
  "../assets/publicphotos/Banos-01.jpg": __vite_glob_0_0,
  "../assets/publicphotos/Banos-2.jpg": __vite_glob_0_1,
  "../assets/publicphotos/Banos-3.jpg": __vite_glob_0_2,
  "../assets/publicphotos/Banos-4.jpg": __vite_glob_0_3,
  "../assets/publicphotos/Cocina-01.jpg": __vite_glob_0_4,
  "../assets/publicphotos/Cocina-02.jpg": __vite_glob_0_5,
  "../assets/publicphotos/Cocina-03.jpg": __vite_glob_0_6,
  "../assets/publicphotos/Habitaciones-01.jpg": __vite_glob_0_7,
  "../assets/publicphotos/Habitaciones-02.jpg": __vite_glob_0_8,
  "../assets/publicphotos/Habitaciones-03.jpg": __vite_glob_0_9,
  "../assets/publicphotos/Habitaciones-04.jpg": __vite_glob_0_10,
  "../assets/publicphotos/Habitaciones-05.jpg": __vite_glob_0_11,
  "../assets/publicphotos/Habitaciones-06.jpg": __vite_glob_0_12,
  "../assets/publicphotos/Habitaciones-07.jpg": __vite_glob_0_13,
  "../assets/publicphotos/Habitaciones-08.jpg": __vite_glob_0_14,
  "../assets/publicphotos/Habitaciones-09.jpg": __vite_glob_0_15,
  "../assets/publicphotos/Habitaciones-10.jpg": __vite_glob_0_16,
  "../assets/publicphotos/Habitaciones-11.jpg": __vite_glob_0_17,
  "../assets/publicphotos/Otros-1.jpg": __vite_glob_0_18,
  "../assets/publicphotos/Sala-01.jpg": __vite_glob_0_19,
  "../assets/publicphotos/Sala-02.jpg": __vite_glob_0_20,
  "../assets/publicphotos/Sala-03.jpg": __vite_glob_0_21,
  "../assets/publicphotos/Sala-04.jpg": __vite_glob_0_22,
  "../assets/publicphotos/Sala-05.jpg": __vite_glob_0_23,
  "../assets/publicphotos/ZonasComunes-14.jpg": __vite_glob_0_24,
  "../assets/publicphotos/ZonasComunes-15.jpg": __vite_glob_0_25,
  "../assets/publicphotos/ZonasComunes-16.jpg": __vite_glob_0_26,
  "../assets/publicphotos/ZonasComunes-17.jpg": __vite_glob_0_27,
  "../assets/publicphotos/ZonasComunes-18.jpg": __vite_glob_0_28,
  "../assets/publicphotos/ZonasComunes-19.jpg": __vite_glob_0_29,
  "../assets/publicphotos/ZonasComunes-20.jpg": __vite_glob_0_30,
  "../assets/publicphotos/ZonasComunes-21.jpg": __vite_glob_0_31,
  "../assets/publicphotos/ZonasComunes-22.jpg": __vite_glob_0_32,
  "../assets/publicphotos/ZonasComunes-23.jpg": __vite_glob_0_33,
  "../assets/publicphotos/ZonasComunes-24.jpg": __vite_glob_0_34,
  "../assets/publicphotos/ZonasComunes-25.jpg": __vite_glob_0_35,
  "../assets/publicphotos/ZonasComunes-7.jpg": __vite_glob_0_36
});
const photoEntries = Object.entries(photoModules).map(([path, url]) => ({
  filename: path.split("/").pop(),
  src: url
}));
const sectionDefs = [{
  id: "habitaciones",
  title: "Habitaciones",
  description: "Espacios para descansar con buena ventilación y aire acondicionado, ideales para el clima cálido del municipio.",
  filenamePrefix: "Habitaciones"
}, {
  id: "sala",
  title: "Sala",
  description: "Zona social acogedora para compartir en familia o con amigos.",
  filenamePrefix: "Sala"
}, {
  id: "cocina",
  title: "Cocina",
  description: "Cocina funcional y equipada para preparar comidas con comodidad.",
  filenamePrefix: "Cocina"
}, {
  id: "banos",
  title: "Baños",
  description: "Baños modernos con duchas en vidrio, espejos retroiluminados y acabados en madera.",
  filenamePrefix: "Banos"
}, {
  id: "zonas-comunes",
  title: "Zonas comunes",
  description: "Piscina principal, toboganes, parque acuático infantil y amplias áreas sociales del conjunto.",
  filenamePrefix: "ZonasComunes"
}, {
  id: "otros",
  title: "Otros",
  description: "Closet, zona de lavandería y otros espacios funcionales del apartamento.",
  filenamePrefix: "Otros"
}];
const sections = sectionDefs.map((sectionDef) => ({
  ...sectionDef,
  photos: getPhotosForSection(sectionDef.filenamePrefix, sectionDef.title)
}));
function getPhotosForSection(filenamePrefix, sectionTitle) {
  return photoEntries.filter((entry) => entry.filename.toLowerCase().startsWith(`${filenamePrefix.toLowerCase()}-`)).sort((a, b) => getPhotoOrder(a.filename) - getPhotoOrder(b.filename)).map((entry) => ({
    src: entry.src,
    alt: `${sectionTitle} ${getPhotoOrder(entry.filename)}`
  }));
}
function getPhotoOrder(filename) {
  const match = filename.match(/-(\d+)\./);
  return match ? Number(match[1]) : 0;
}
function SectionGallery({
  photos
}) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  if (photos.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "flex aspect-[16/10] w-full items-center justify-center rounded-md border border-dashed border-border/60 bg-muted/40 text-xs uppercase tracking-widest text-muted-foreground", children: "Fotos por agregar" });
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
  return /* @__PURE__ */ jsxs("div", { className: "px-10 sm:px-12", children: [
    /* @__PURE__ */ jsxs(Carousel, { setApi, opts: {
      loop: photos.length > 1
    }, children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: photos.map((photo, i) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("figure", { className: "overflow-hidden rounded-md border border-border/60 bg-card shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] w-full overflow-hidden bg-muted", children: /* @__PURE__ */ jsx("img", { src: photo.src, alt: photo.alt, loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("figcaption", { className: "flex items-center justify-between px-4 py-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: photo.alt }),
          /* @__PURE__ */ jsxs("span", { className: "tabular-nums", children: [
            i + 1,
            " / ",
            photos.length
          ] })
        ] })
      ] }) }, i)) }),
      photos.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-0 sm:-left-2" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "right-0 sm:-right-2" })
      ] })
    ] }),
    photos.length > 1 && /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center gap-1.5", children: photos.map((_, i) => /* @__PURE__ */ jsx("button", { "aria-label": `Ir a la foto ${i + 1}`, onClick: () => api?.scrollTo(i), className: `h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-1.5 bg-border"}` }, i)) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxs("header", { className: "relative border-b border-border/60", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" }),
      /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium tracking-wide text-primary", children: "Apartamento · Santa Fe de Antioquia" }),
        /* @__PURE__ */ jsx("ul", { className: "hidden gap-6 text-muted-foreground sm:flex", children: sections.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${s.id}`, className: "transition-colors hover:text-primary", children: s.title }) }, s.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.25em] text-accent-foreground/70", children: "Antioquia · Colombia" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-medium leading-tight text-foreground sm:text-6xl", children: [
          "Un apartamento cerca al Pueblo Patrimonio, de calles",
          /* @__PURE__ */ jsx("br", {}),
          "empedradas y casas blancas."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Información y fotografías del apartamento en Santa Fe de Antioquia, una de las villas coloniales más antiguas y bellas del país." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-5xl px-6 py-20", children: sections.map((section, idx) => /* @__PURE__ */ jsxs("section", { id: section.id, className: idx === 0 ? "scroll-mt-24" : "mt-24 scroll-mt-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-end justify-between gap-6 border-b border-border/60 pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary/80", children: String(idx + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("h2", { className: "mt-1 text-3xl font-medium sm:text-4xl", children: section.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "hidden max-w-md text-sm text-muted-foreground sm:block", children: section.description })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-sm text-muted-foreground sm:hidden", children: section.description }),
      /* @__PURE__ */ jsx(SectionGallery, { photos: section.photos })
    ] }, section.id)) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-border/60 bg-secondary/40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-6 py-10 text-center text-xs text-muted-foreground", children: "Santa Fe de Antioquia · Colombia" }) })
  ] });
}
export {
  Index as component
};
