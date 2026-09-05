"use client";

import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/lillia-data";

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => current === null ? 0 : (current + 1) % galleryImages.length);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [active]);

  const previous = () => setActive((current) => current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActive((current) => current === null ? 0 : (current + 1) % galleryImages.length);

  return (
    <>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            className={`gallery-card gallery-card--${image.size}`}
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            data-reveal
            aria-label={`Open image: ${image.label}`}
          >
            <span className="gallery-card__image"><img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} loading={index > 2 ? "lazy" : "eager"} /></span>
            <span className="gallery-card__meta"><small>{String(index + 1).padStart(2, "0")}</small><span>{image.label}</span><Expand size={15} strokeWidth={1.3} /></span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button className="lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Close image viewer">
            Close <X size={21} strokeWidth={1.2} />
          </button>
          <button className="lightbox__arrow lightbox__arrow--left" type="button" onClick={previous} aria-label="Previous image">
            <ChevronLeft strokeWidth={1.1} />
          </button>
          <figure>
            <img src={galleryImages[active].src} alt={galleryImages[active].alt} />
            <figcaption><span>{String(active + 1).padStart(2, "0")} / {galleryImages.length}</span>{galleryImages[active].label}</figcaption>
          </figure>
          <button className="lightbox__arrow lightbox__arrow--right" type="button" onClick={next} aria-label="Next image">
            <ChevronRight strokeWidth={1.1} />
          </button>
        </div>
      )}
    </>
  );
}
