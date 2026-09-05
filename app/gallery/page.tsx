import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GalleryGrid } from "@/components/site/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual journal of Lillia brides, designer gowns and unforgettable wedding-day moments.",
};

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <section className="gallery-masthead section-shell">
        <div className="gallery-masthead__index hero-enter hero-enter--one"><span>03</span><i /></div>
        <p className="eyebrow hero-enter hero-enter--two">The gallery</p>
        <h1 className="hero-enter hero-enter--three"><span>The dress is only</span><em>the beginning.</em></h1>
        <div className="gallery-masthead__intro hero-enter hero-enter--four">
          <p>A visual journal of gowns chosen, vows made and every beautifully unguarded moment in between.</p>
          <span>Click any photograph to view</span>
        </div>
      </section>

      <section className="gallery-wrap section-shell" aria-label="Lillia Bridal image gallery">
        <GalleryGrid />
      </section>

      <section className="gallery-cta" data-reveal>
        <p className="eyebrow eyebrow--light">Write the next chapter</p>
        <h2>One day, these<br /><em>could be your photographs.</em></h2>
        <Link className="button button--light" href="/appointment">Begin with an appointment <ArrowRight size={17} /></Link>
      </section>
    </main>
  );
}
