import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { designers } from "@/lib/lillia-data";

export const metadata: Metadata = {
  title: "Designer Gowns",
  description: "Explore the Lillia Bridal edit from Étoile Élysée, Omélia Bridal, Love Enzoani and Élysée.",
};

export default function DesignersPage() {
  return (
    <main>
      <PageHero
        number="02"
        eyebrow="The designer edit"
        title={<><span>Distinct signatures.</span><em>A shared standard.</em></>}
        intro="Four bridal houses selected not to overwhelm the room, but to give every kind of confidence a place within it."
        image="/images/couture-detail.webp"
        alt="Close view of an intricately embellished couture wedding gown"
        caption="Craftsmanship worth seeing closely"
        position="50% 32%"
        mobilePosition="50% 30%"
        variant="designers"
        reverse
      />

      <section className="collection-note section-shell">
        <p className="section-number" data-reveal>Curated, not crowded</p>
        <div data-reveal>
          <h2>A collection with<br /><em>space between the gowns.</em></h2>
          <p>Every designer brings a different point of view. Together they create a wardrobe with range and discipline—from clean architectural lines to richly worked romance—so the choice feels expansive, never endless.</p>
        </div>
      </section>

      <section className="designer-collection section-shell">
        {designers.map((designer, index) => (
          <article className={`designer-feature designer-feature--${designer.format} ${index % 2 ? "designer-feature--reverse" : ""}`} key={designer.name}>
            <figure className={`designer-feature__media designer-feature__media--${designer.format}`} data-reveal>
              <img src={designer.image} alt={designer.alt} style={{ objectPosition: designer.position }} loading={index > 0 ? "lazy" : "eager"} />
              <figcaption>Collection {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
            <div className="designer-feature__copy" data-reveal>
              <div className="designer-feature__number">0{index + 1}<i /></div>
              <p className="eyebrow">{designer.signature}</p>
              <h2>{designer.name}</h2>
              <p>{designer.description}</p>
              <span className="designer-feature__line">Available to discover by private appointment</span>
            </div>
          </article>
        ))}
      </section>

      <section className="collection-ending">
        <div className="collection-ending__image"><img src="/images/lace-train.webp" alt="Long detailed lace wedding gown train" loading="lazy" /></div>
        <div className="collection-ending__copy" data-reveal>
          <p className="eyebrow">See it. Feel it. Move in it.</p>
          <h2>A photograph introduces a gown.<br /><em>The appointment reveals it.</em></h2>
          <p>Fabric, proportion and movement only make sense when the dress is with you. Limara will help you discover what the image cannot show.</p>
          <Link className="button button--dark" href="/appointment">Meet the collection <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
