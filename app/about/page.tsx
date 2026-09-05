import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "About Limara",
  description: "Meet Limara Roberts and discover the personal story behind Lillia Bridal in Kemnay, Aberdeenshire.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        number="04"
        eyebrow="The woman behind the room"
        title={<><span>Built from experience.</span><em>Named for love.</em></>}
        intro="Lillia Bridal began with Limara Roberts and one conviction: finding a wedding dress could feel more personal, more honest and far less pressured."
        image="/images/limara.webp"
        alt="Limara Roberts, owner of Lillia Bridal, inside the boutique"
        caption="Limara Roberts · Founder and bridal stylist"
        position="28% 45%"
        mobilePosition="24% 48%"
        variant="about"
      />

      <section className="founder-story section-shell">
        <div className="founder-story__aside" data-reveal>
          <p className="section-number">The story</p>
          <span className="founder-story__initial">L</span>
        </div>
        <div className="founder-story__copy" data-reveal>
          <h2>It began with a name<br /><em>that already meant everything.</em></h2>
          <p className="lead-copy">The boutique is named after Limara’s first daughter, Lillia—a personal beginning for a business built around deeply personal moments.</p>
          <p>Limara understood how easily bridal shopping could become busy, performative or shaped by everyone except the bride. She created the opposite: a space where one woman can listen carefully to another, where honesty is generous, and where there is time to work out what feeling like yourself really looks like.</p>
          <p>That philosophy still decides everything—from the gowns invited into the collection to the pace of each appointment.</p>
        </div>
      </section>

      <section className="about-portrait section-shell">
        <figure className="about-portrait__main" data-reveal>
          <img src="/images/real-bride-coast.webp" alt="Lillia bride and her partner walking on the coast" loading="lazy" />
          <figcaption>From a private room to a very real day</figcaption>
        </figure>
        <div className="about-portrait__principles" data-reveal>
          <p className="eyebrow">What guides the house</p>
          <div><span>01</span><h3>Listen before styling</h3><p>Your life and your instincts come before any trend.</p></div>
          <div><span>02</span><h3>Edit with intention</h3><p>Fewer, better choices make room for a clearer answer.</p></div>
          <div><span>03</span><h3>Be beautifully honest</h3><p>Advice should make you more certain, never more pressured.</p></div>
        </div>
      </section>

      <section className="place-section">
        <div className="place-section__copy" data-reveal>
          <p className="eyebrow eyebrow--light">Kemnay · Aberdeenshire</p>
          <h2>A destination<br /><em>with room to breathe.</em></h2>
          <p>Tucked within Netherton Business Centre, Lillia is close enough to reach and quiet enough to feel like an occasion of its own.</p>
          <address>Netherton Business Centre<br />Kemnay, Aberdeenshire<br />AB51 5LX</address>
          <Link className="text-link text-link--light" href="/appointment">Plan your visit <ArrowRight size={17} /></Link>
        </div>
        <figure><img src="/images/home-couple.webp" alt="Joyful newly married couple together outdoors" loading="lazy" /></figure>
      </section>
    </main>
  );
}
